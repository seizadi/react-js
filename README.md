# ReactJS

## Summary
This repo has a number of ReactJS applications that
I developed taking the
[Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/).

This course was thaught by 
[Stephen Grider](https://www.udemy.com/user/sgslo/).

I found the course very helpful as a starting point.

## Deployment

There are a number projects under here each its own
standalone ReactJS application. They each have their
own README and specific detail as needed.

Here I capture detail about deploying any ReactJS
application, using the videos application as a
sample.

### Deploy using [Vercel](vercel.com)

It was very easy to deploy videos-hooks to their
service, through integration with GitHub, you can
deploy using CLI, I used the web UI:
```bash
```

To use CLI run:
```bash
npm install -g vercel
```

Then login
```bash
❯ vercel login
Vercel CLI 19.2.0
We sent an email to seizadi@gmail.com. Please follow the steps provided inside it and make sure the security code matches Evil Penguin.
✔ Email confirmed
Congratulations! You are now logged in. In order to deploy something, run `vercel`.
💡  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).
```

Then deploy:
```bash
❯ cd ../widgets
❯ vercel
Vercel CLI 19.2.0
? Set up and deploy “~/project/react/jsx/widgets”? [Y/n] y
? Which scope do you want to deploy to? Soheil Eizadi
? Link to existing project? [y/N] n
? What’s your project’s name? widgets
? In which directory is your code located? ./
Auto-detected Project Settings (Create React App):
- Build Command: `npm run build` or `react-scripts build`
- Output Directory: build
- Development Command: react-scripts start
? Want to override the settings? [y/N] n
🔗  Linked to seizadi/widgets (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/seizadi/widgets/of4ep6ak1 [1s]
✅  Production: https://widgets-pi.vercel.app [copied to clipboard] [40s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/seizadi/widgets/settings
  
```

You can visit it in the link above:
[ https://vercel.com/seizadi/widgets/of4ep6ak1]( https://vercel.com/seizadi/widgets/of4ep6ak1)

Note translate tab will not support due to API ACL locked to running on localhost.

As the help above highlights you run:
```bash
vercel --prod
```
To redeploy to production after making updates.

When you login and run these commands vercel
creates elements under hidden '.vercel' similar
to '.git' to track changes. It updates the .gitignore
so these are not checked in to GitHub, but it
does track the changes on their website.

### Deploy using [Netlify](https://app.netlify.com/)

It is similar to vercel except, since you
don't have CLI to navigate to multiple apps
you need to have a repo setup with just a 
single application. The UI does not have
tools to navigate to a different branch for the
build settings.

### AWS S3/CDN

Deploying this to AWS S3 with or wihtout CDN
front end is another area that I will docment
here.






