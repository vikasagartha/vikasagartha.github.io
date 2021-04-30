const makeid = (length = 5) => {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() *
 charactersLength)));
   }
   return result.join('');
}

const randomCheeses = () => fetch('https://dyuzzyu6bl.execute-api.us-east-1.amazonaws.com/dev/randomCheeses').then(d => d.json())

const isEmpty = d => d == null || d === ''

const parseRequestURL = () => {
  const url = location.hash.slice(1).toLowerCase() || '/'
  const r = url.split("/")
  return {
      resource: r[1],
      id: r[2],
      verb: r[3]
  }
}

const navbar = {
  render: async () => `
    <ul class='navbar'>
      <li><a href='#/cheeses'>Cheeses</a></li>
    </ul>
  `,
  postRender: async () => {
  }
}

const cheeseTable = {
  render: async (data) => `
    <h1>Cheese Table</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Producer</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      ${data.map(d => `
          <tr>
            <td>${d.title}</td>
            <td>${d.producer}</td>
            <td>${d.country}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  `,
  postRender: async (data) => {
  }
}

const routes = {
  '/': {view: cheeseTable, getData: randomCheeses},
  '/cheeses': {view: cheeseTable, getData: randomCheeses},
}

const router = async () => {

  const content = null || document.getElementById('content')
  const header = null || document.getElementById('header')

  content.innerHTML = '<div class="loader" style="margin-top: 20%">Loading...</div>'

  if(isEmpty(header.innerHTML)) {
    header.innerHTML = await navbar.render()
    navbar.postRender()
  }

  setTimeout(async () => {
    const request = parseRequestURL()
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    const route = routes[parsedURL] ? routes[parsedURL] : {view: {render: async () => '404 Not Found'}}

    const page = route.view
    const getData = route.getData || (() => Promise.resolve({}))
    const data = await getData(request.id)
    content.innerHTML = await page.render(data)
    if(page.postRender) await page.postRender(data)
  }, 500)

}

const init = () => {
  document.getElementById('cheese-library').innerHTML = `
    <div id='header'></div>
    <div id='content'></div>
  `
  window.addEventListener('hashchange', router)
  window.addEventListener('load', router)
}

init()
