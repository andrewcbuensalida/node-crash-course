Based on a tutorial by the Net Ninja
Deploying to GCP app engine https://www.youtube.com/watch?v=HgpCjChgjoQ&list=PL42xwJRIG3xCtmOrJAQFR5sIJFKIJ9MEn&index=2
didnt work at first but had to set port to process.env.PORT to work. || port 8080

to register domain,
had to add txt verification file to aws blogs.anhonestobserver.com to register domain
had to copy name servers from app engine to where i bought the domain name (aws)
ssl in aws

for ci/cd from vs code to gh to app engine, use cloud build. https://www.youtube.com/watch?v=Zd014DjonqE&t=498s cloudbuild.yaml very important
for some reason dont have permission to deploy with code build.
had to set IAM roles to @cloudbuild.gserviceaccount.com
App Engine Admin
App Engine Deployer
Cloud Build Service Account
Cloud Build WorkerPool User
Service Account User

for setting env variables, https://medium.com/@brian.young.pro/how-to-add-environmental-variables-to-google-app-engine-node-js-using-cloud-build-5ce31ee63d7
working! the only problem is no forever. and how does it know which branch to deploy?
i guess it deploys whatever the head is, guessing based on the build log

- branch adc60d8edb1439a5a56723d7c1996b157ef9beb8 -> FETCH_HEAD
  HEAD is now at adc60d8 corrected DB_PW
  BUILD

  OR they say To build your source on a Git repo, Cloud Build performs a shallow clone of the repo. This means that only the single commit that started the build is checked out in the workspace to build. Cloud Build does not check out any other branches or history. This is done for efficiency, so that builds don't have to wait to fetch the whole repository and history just to build a single commit.

app.yaml very particular too, needs nodejs14

express rate limit sucks. i set it to 1 max request per 20 seconds, it allows 2.
