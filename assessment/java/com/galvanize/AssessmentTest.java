package com.galvanize;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.collection.IsIterableContainingInAnyOrder.containsInAnyOrder;
import static org.hamcrest.collection.IsIterableWithSize.iterableWithSize;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AssessmentTest extends GalvanizeApiTestHelpers {

    @Test
    public void testCreate() throws Exception {
        JsonObject user = new JsonObject();
        String email = getRandomEmail();
        user.addProperty("email", email);
        user.addProperty("password", "password");

        JsonObject payload = new JsonObject();
        payload.add("user", user);

        String url = "/users";
        JsonObject createdUser = post(url, payload).getAsJsonObject();
        assertThat(createdUser.get("email").getAsString(), equalTo(email));

        ensurePasswordIsNotPresent(createdUser);

        JsonObject userListResource = get(url).getAsJsonObject();
        JsonArray userList = userListResource.get("users").getAsJsonArray();

        Long idFromCreate = createdUser.get("id").getAsLong();
        Long idFromIndex = userList.get(0).getAsJsonObject().get("id").getAsLong();
        assertThat(idFromCreate, equalTo(idFromIndex));

        userShouldBeAuthenticated(email, "password");
        userShouldNotBeAuthenticated(email, "wrong password");
    }

    @Test
    public void testShow() throws Exception {
        JsonObject user = new JsonObject();
        user.addProperty("email", getRandomEmail());
        user.addProperty("password", "password");

        JsonObject payload = new JsonObject();
        payload.add("user", user);

        JsonObject createdUser = post("/users", payload).getAsJsonObject();
        String idFromCreate = createdUser.get("id").getAsString();

        JsonObject showUser = get("/users/" + idFromCreate).getAsJsonObject().getAsJsonObject("user");

        assertThat(showUser.get("id").getAsString(), equalTo(idFromCreate));
        assertThat(showUser.get("email").getAsString(), equalTo(user.get("email").getAsString()));
    }

    @Test
    public void testUpdateWithoutPassword() throws Exception {
        String password = "pass1234";
        String originalEmail = getRandomEmail();
        String newEmail = getRandomEmail();

        JsonObject user = new JsonObject();
        user.addProperty("email", originalEmail);
        user.addProperty("password", password);

        JsonObject payload = new JsonObject();
        payload.add("user", user);

        JsonObject createdUser = post("/users", payload).getAsJsonObject();
        String idFromCreate = createdUser.get("id").getAsString();

        user.addProperty("id", idFromCreate);
        user.addProperty("email", newEmail);

        JsonObject patchUser = patch("/users/" + idFromCreate, user).getAsJsonObject();
        ensurePasswordIsNotPresent(patchUser);

        JsonObject showUser = get("/users/" + idFromCreate).getAsJsonObject().getAsJsonObject("user");
        ensurePasswordIsNotPresent(showUser);

        assertThat(showUser.get("id").getAsString(), equalTo(idFromCreate));
        assertThat(showUser.get("email").getAsString(), equalTo(newEmail));

        userShouldBeAuthenticated(newEmail, password);
        userShouldNotBeAuthenticated(originalEmail, password);
    }

    @Test
    public void testUpdateWithPassword() throws Exception {
        String email = getRandomEmail();
        String originalPassword = "1234pass";
        String newPassword = "abc123";

        JsonObject user = new JsonObject();
        user.addProperty("email", email);
        user.addProperty("password", originalPassword);

        JsonObject payload = new JsonObject();
        payload.add("user", user);

        JsonObject createdUser = post("/users", payload).getAsJsonObject();
        String idFromCreate = createdUser.get("id").getAsString();

        user.addProperty("id", idFromCreate);
        user.addProperty("email", email);
        user.addProperty("password", newPassword);

        JsonObject updatedUser = patch("/users/" + idFromCreate, user).getAsJsonObject();
        ensurePasswordIsNotPresent(updatedUser);

        assertThat(updatedUser.get("id").getAsString(), equalTo(idFromCreate));
        assertThat(updatedUser.get("email").getAsString(), equalTo(email));

        userShouldBeAuthenticated(email, newPassword);
        userShouldNotBeAuthenticated(email, originalPassword);
    }

    @Test
    public void testDelete() throws Exception {
        String email = getRandomEmail();
        String password = "1234";

        JsonObject user = new JsonObject();
        user.addProperty("email", email);
        user.addProperty("password", password);

        JsonObject payload = new JsonObject();
        payload.add("user", user);

        JsonObject createdUser = post("/users", payload).getAsJsonObject();
        String idFromCreate = createdUser.get("id").getAsString();

        JsonObject response = delete("/users/" + idFromCreate).getAsJsonObject();
        int count = response.get("count").getAsInt();
        assertThat(count, equalTo(0));

        JsonObject userListResource = get("/users").getAsJsonObject();
        JsonArray userList = userListResource.get("users").getAsJsonArray();

        assertThat(userList.size(), equalTo(0));

        userShouldNotBeAuthenticated(email, password);
    }

    private String getRandomEmail() {
        return "user" + String.valueOf(new Random().nextInt()) + "@example.com";
    }

    private void ensurePasswordIsNotPresent(JsonObject createdUser) {
        List<String> keys = createdUser.entrySet()
                .stream()
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        assertThat(keys, iterableWithSize(2));
        assertThat(keys, containsInAnyOrder("id", "email"));
    }

    private JsonObject authenticate(String email, String password) {
        JsonObject credentials = new JsonObject();
        credentials.addProperty("email", email);
        credentials.addProperty("password", password);

        return post("/users/authenticate", credentials).getAsJsonObject();
    }

    private void userShouldBeAuthenticated(String email, String password) {
        JsonObject response = authenticate(email, password);
        assertThat(response.get("authenticated").getAsBoolean(), equalTo(true));

        JsonObject user = response.get("user").getAsJsonObject();
        ensurePasswordIsNotPresent(user);
    }

    private void userShouldNotBeAuthenticated(String email, String password) {
        JsonObject response = authenticate(email, password);
        assertThat(response.get("authenticated").getAsBoolean(), equalTo(false));
    }

}
