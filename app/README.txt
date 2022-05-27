New Iteration Checklist:

- Duplicate "/views/beta-private/iteration-x/" (latest) folder.
- Duplicate "/routes/beta-private/iteration-X.js" (latest) to create a new routes for the new iteration
- Add a reference to this new file in "/views/routes.js"
- Add a link to the new iteration in:
  * "/views/index.html"
  * "/beta-private/index.html"
  * "/beta-private/iteration-[new]/index.html"
- Amend links to reflect the new iteration in "/beta-private/iteration-[new]/scenario-[all]/index.html"
- Add design decisions and hypotheses to previous iteration
