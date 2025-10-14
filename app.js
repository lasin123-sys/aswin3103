// Define routes and views
const routes = {
  '/': () => `<h1>Home</h1><p>Welcome to our SPA homepage!</p>`,
  '/about': () => `<h1>About</h1><p>This is a simple Single Page Application.</p>`,
  '/contact': () => `<h1>Contact</h1><p>Contact us at: hello@example.com</p>`
};

// Handle navigation
function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

// Render view based on current path
function render() {
  const view = routes[location.pathname] || (() => `<h1>404 Not Found</h1>`);
  document.getElementById('app').innerHTML = view();
}

// Setup event listeners
window.addEventListener('popstate', render);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  render();
});
