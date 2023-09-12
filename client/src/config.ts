const apiId = 'obhjexgse2'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-1.amazonaws.com/dev`

export const authConfig = {
  // DONE: Create an Auth0 application and copy values from it into this map
  domain: 'dev-bm46w28g5dtuqqgq.us.auth0.com', // Auth0 domain
  clientId: 'VnGFVWVYwRDiGa5vFEghbVFXhiqWqGBX', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
