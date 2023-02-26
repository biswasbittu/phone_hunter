const loadPhoneData = async (searchText) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

}
const displayPhones = phones => {
    
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer .textContent="";
      phones=phones.slice(0,10);
      // Display no phones found........
      const noPhone=document.getElementById('no-found');
      if(phones.length===0){
        alert('No result Found')
        noPhone.classList.remove('d-none');

      }
      else{
        noPhone.classList.add('d-none');
      }
    phones.forEach(phone => {
        // console.log(phone.phone_name);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-3">
        <img  src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>`;
        phoneContainer.appendChild(div);
    // stop loder........
      toggleSpinner(false);


    })

}
    document.getElementById('btn-search').addEventListener('click', function () {
    // steart loader........
      toggleSpinner(true);
      const searchFieldElement=document.getElementById('search-field');
    const searchText=searchFieldElement.value;
    searchFieldElement.value='';

    
    loadPhoneData(searchText);

    
    
})

const toggleSpinner = isLoading =>{
  const loaderSection=document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none');
  }

}

// loadPhoneData();
