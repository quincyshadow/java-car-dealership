package com.galvanize;

import com.google.gson.*;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class GalvanizeApiTestHelpers {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    TestRestTemplate template;

    // This is here to add support for sending `PATCH` requests with a RestTemplate
    // It requires the org.apache.httpcomponents:httpclient
    // This can be removed once the app is in Spring 5: https://github.com/spring-projects/spring-boot/issues/6578
    @Before
    public void setupTestRestTemplateSoItCanSendPatchRequests() {
        this.template.getRestTemplate().setRequestFactory(new HttpComponentsClientHttpRequestFactory());
    }

    @Before
    public void clearDatabase() {
        this.jdbcTemplate.execute("SET @@foreign_key_checks = 0;");

        String query = "SELECT table_name FROM information_schema.tables WHERE TABLE_SCHEMA IN (SELECT DATABASE())";
        this.jdbcTemplate.queryForList(query).forEach(row -> {
            this.jdbcTemplate.execute("TRUNCATE TABLE " + row.get("TABLE_NAME"));
        });

        this.jdbcTemplate.execute("SET @@foreign_key_checks = 0");
    }

    protected JsonElement get(String url) {
        ResponseEntity<String> responseEntity = requestWithoutBody(url, HttpMethod.GET);
        assertThat(responseEntity.getStatusCode(), equalTo(HttpStatus.OK));
        return new JsonParser().parse(responseEntity.getBody());
    }

    protected JsonElement post(String url, JsonObject payload) {
        return requestWithBody(url, payload, HttpMethod.POST);
    }

    protected JsonElement patch(String url, JsonObject payload) {
        return requestWithBody(url, payload, HttpMethod.PATCH);
    }

    protected JsonElement delete(String url) {
        ResponseEntity<String> responseEntity = requestWithoutBody(url, HttpMethod.DELETE);
        return new JsonParser().parse(responseEntity.getBody());
    }

    protected ResponseEntity<String> requestWithoutBody(String url, HttpMethod method) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        return template.exchange(url, method, entity, String.class);
    }

    protected JsonElement requestWithBody(String url, JsonObject payload, HttpMethod method) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Gson builder = new GsonBuilder().create();
        String jsonString = builder.toJson(payload);

        HttpEntity<String> requestEntity = new HttpEntity<>(jsonString, headers);
        ResponseEntity<String> responseEntity = template.exchange(url, method, requestEntity, String.class);

        assertThat(responseEntity.getStatusCode(), equalTo(HttpStatus.OK));
        return new JsonParser().parse(responseEntity.getBody());
    }
}
