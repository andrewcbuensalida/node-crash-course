Based on a tutorial by the Net Ninja
Deploying to GCP app engine https://www.youtube.com/watch?v=HgpCjChgjoQ&list=PL42xwJRIG3xCtmOrJAQFR5sIJFKIJ9MEn&index=2
didnt work at first but had to set port to process.env.PORT to work.
had to use google cloud sdk shell instead of vs code prompt
had to add txt verification file to aws blogs.anhonestobserver.com to register domain
had to copy name servers from app engine to where i bought the domain name (aws)
ssl in aws
for ci/cd, use cloud build to auto deploy from github. https://www.youtube.com/watch?v=Zd014DjonqE&t=498s
except in the cloudbuild.yaml, for the deploy
step, just did run start
