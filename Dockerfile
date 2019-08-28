# Docker image
FROM java:latest

RUN mkdir /app
WORKDIR /app

# Add Gradle from upstream
ADD gradle ./gradle
ADD gradlew .
ADD gradlew.bat .
ADD build.gradle .

# Install dependencies
RUN { \
    echo 'task fetchDependencies { description "Pre-downloads *most* dependencies"'; \
    echo 'doLast { configurations.getAsMap().each { name, config ->'; \
    echo 'print "Fetching dependencies for $name..."'; \
    echo 'try { config.files; println "done" }'; \
    echo 'catch (e) { println ""; project.logger.info e.message; }'; \
    echo '} } }'; \
} >>./build.gradle
RUN ./gradlew --no-daemon clean fetchDependencies

# Add entire student fork (overwrites previously added files)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# Overwrite files in student fork with upstream files
ADD assessment ./assessment
ADD test.sh .
ADD build.gradle .
