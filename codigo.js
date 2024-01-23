
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7b77b4dde9msh7c08e56b4710109p129fddjsn2cde2cb46a95',
    'X-RapidAPI-Host': 'ip-geolocalization-api.p.rapidapi.com'
  }
};

const fetchIpInfo = async (ip) => {
  try {
  const response = await fetch(`https://ip-geolocalization-api.p.rapidapi.com/${ip}`, options);
  return await response.json();
} catch (error) {
  console.error(console.error());
}
};

// const fetchIpInfo = ip => {
//   return fetch(`https://ip-geolocalization-api.p.rapidapi.com/${ip}`, OPTIONS);
//   .then(res => res.json())
//   .catch(err => console.error(err))
// }

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

form.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const value = input.value;
    if (!value) return;

    submit.setAttribute('disabled', true);
    submit.setAttribute('aria-busy', true);

    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
        results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');
});