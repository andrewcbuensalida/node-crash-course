Based on a tutorial by the Net Ninja
Deploying to GCP app engine https://www.youtube.com/watch?v=HgpCjChgjoQ&list=PL42xwJRIG3xCtmOrJAQFR5sIJFKIJ9MEn&index=2
didnt work at first but had to set port to process.env.PORT to work. || port 8080

to register domain,
had to add txt verification file to aws blogs.anhonestobserver.com to register domain
had to copy name servers from app engine to where i bought the domain name (aws)
ssl in aws

for ci/cd, use cloud build to auto deploy from github. https://www.youtube.com/watch?v=Zd014DjonqE&t=498s !!! not working yet
except in the cloudbuild.yaml, for the deploy
for some reason dont have permission to deploy with code build.
had to set IAM roles to @cloudbuild.gserviceaccount.com
App Engine Admin
App Engine Deployer
Cloud Build Service Account
Cloud Build WorkerPool User
Service Account User

so far, only works with gcloud app deploy. it sees .env even if it's git ignored.
https://cloud.google.com/appengine/docs/flexible/nodejs/roles#recommended_role_for_application_deployment

for setting env variables, https://medium.com/@brian.young.pro/how-to-add-environmental-variables-to-google-app-engine-node-js-using-cloud-build-5ce31ee63d7
