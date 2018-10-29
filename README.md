# now dashboard

## Try it!

Log in on https://now-dash.now.sh. It uses the normal login flow that zeit provides, where you verify your log in through an email.

The application is a completely stand-alone single-page React application, and all communication is between your PC and zeit.

Don't like it? Fork it and deploy your own! It's a simple static deployment that doesn't take up any instances on now.

## Development

1. `yarn`
2. `REACT_APP_NOW_TOKEN=<your now token> yarn start`, you can omit the token, and log in normally

## Deployment

1. Install [now cli](https://github.com/zeit/now-cli) (and login)
2. From the root of the project run `now`

This deploys the application as a static SPA on now.
