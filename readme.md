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

-   branch adc60d8edb1439a5a56723d7c1996b157ef9beb8 -> FETCH_HEAD
    HEAD is now at adc60d8 corrected DB_PW
    BUILD

    OR they say To build your source on a Git repo, Cloud Build performs a shallow clone of the repo. This means that only the single commit that started the build is checked out in the workspace to build. Cloud Build does not check out any other branches or history. This is done for efficiency, so that builds don't have to wait to fetch the whole repository and history just to build a single commit.

app.yaml very particular too, needs nodejs14

express rate limit sucks. i set it to 1 max request per 20 seconds, it allows 2.

now trying scss:
stacking context is the order of elements in the z-index. the stacking order of the children of a parent is group into that parent's stacking order. so its possible for an element a with z-index 1 be underneath an element b with z-index -1 if element a's parent is underneath element b.
display: inline-block; is when you want an inline element (an element that's position is not influenced by
padding and border) to adjust when the padding and border is too large. so it acts as an inline, meaning they
fit side by side, but their padding and border is included in the fitting.
images and iframes behave like inline-block elements.
block elements, even if they could fit side by side, are stacked on top of each other.
inline elements fit side by side horizontally. their padding doesnt influence their position. cant give them a
height or margin, but can change their size.
they say dont use float: right or left. for layouting. use it to wrap text around it. for layouting, use inline-block instead or display:flex.
inline elements like a tags, and spans cant set the width or height, it is set by its contents, but other inline elements like images can. inline elements ignore top and bottom margins. margins of two elements next to each other will overlap.
for inline elements, if margin is auto, or not set, it is 0.
box-sizing:border-box; makes the height and width account for padding and border.
if margin-top and bottom is auto, default is 0 for block level elements.
absolute, fixed positioning, border, margin shifts others. align-self, relative, static, sticky, padding, overflow, translate doesnt.
html=onmouseover, js=mouseover, css=:hover

to change css during runtime:
a. set an animation.
b. pseudo selectors like :hover, :active, :focus, etc.
c. add a class via javascript, click eventlistener, select the element via let myElement = document.querySelector('#myID'), then myElement.classList.add("mystyle"); mystyle being the class name.
d. if it's just one style, myElement.setAttribute("style","background-color:yellow") this will overwrite background-color, but the other styles will remain for some reason.
or setAttribute("class","myClass") this will overwrite all classes.
e. or myElement.className or classList = "newClassName" will completely overwrite all the class names.
f. or myElement.style.backgroundColor = "blue"; or myElement.style.setProperty("background-color","yellow") or myElement.style['background-color'] = "blacked";
g. myElement.style.cssText = "color:blue; background-color:red"; if changing multiple.

for responsive:
a. @media screen and (min-width:500px){
div{
width: 200px;
}
}
b. columns: 100px, 4; meaning minimum width is 100px, so if screen gets larger, width will expand but max columns is 4, but if it gets smaller, width will shrink then when width gets to below 100px it'll remove a column.
c. min-width: 200px; element starts big, but when screen gets too skinny, element wont shrink anymore.
d. flex.
e. width: min()

to center a div, many ways:

1. display:flex or grid the parent, also align-items:center, justify-content:center.
2. child has display:relative, left:50%, top:50%, transform: translate(-50%,-50%)
3. or grid, parent gets
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   child has
   .child {
   grid-column-start: 2;
   grid-row-start: 2;
   }

    but it wont work for inline elements like text because itll be on upper left of grid segment.

4. or display:grid or flex, then child has margin:auto if it's just one child node. simplest.
5. or if the size was not dynamic, top: 50%; height: 100px; margin-top:-50px
6. or top:0;bottom:0;left:0;right:0;, margin:auto, then position absolute on child, position relative on container.

to center text in a div:

1. just wrap the text in a div, so itll be text in a div in a div, then display:flex on the parent.....
2. or parent is display:table, child div has display:table-cell, and vertical-align:middle.
3. or set the line height to the height of the container for vertical centering, then text-align:center for horizontal. not very responsive if it's more than one line.
4. or container has display:grid, justify-content, align-items: center;
5. or container display:grid, and if it's just one child, margin:auto.
6. have the padding big enough.

you.keepvid.tube to download videos from artgrid.io, then upload to amazon s3 for hosting.
make the bucket public and the file public, then copy the object url. then make a video element with sourrce pointing to it.
dont need to download or upload to s3, could get it from pexels. right click on video, view frame source, then find the mp4.

where to get website design inspirations: wix, wordpress, codepen.

todo:
paragraph line breaks
about page
