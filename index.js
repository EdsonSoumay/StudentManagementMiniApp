const cari = document.querySelector('#kotak-pencarian');
const fakultas = document.querySelector('#fakultas');
const prodi = document.querySelector('#prodi');
const tableSiswa = document.querySelector('.table');
const id = document.getElementById('id');
const name = document.getElementById('name');
var body = tableSiswa.querySelector('tbody');
var filterfak = document.querySelector('#filterFakultas');
var filterpro = document.querySelector('#filterProdi');
const formulir = document.querySelector('.formulir');
let tipe = [document.querySelector('#male'),
            document.querySelector('#female')]
  var tampilkan = document.querySelector('.show-form');
  formulir.addEventListener('submit',tambah);
function tambah(events){
    events.preventDefault();
    const datas = {
        rows:document.createElement('tr'),
        td1:document.createElement('td'),
        td2:document.createElement('td'),
        td3:document.createElement('td'),
        td4:document.createElement('td'),
        td5:document.createElement('td'),
        tbtn:document.createElement('button')
      }
      const gender = tipe.map(function(kelamin){
        if (kelamin.checked) {
          return kelamin.value;
        }
      })
      datas.td1.innerText = id.value;
      datas.td2.innerText = name.value;
      datas.td3.innerText = gender;
      datas.td4.innerText = fakultas.value;
      datas.td5.innerText = prodi.value;
      datas.tbtn.classname = 'btn btn-danger';
      datas.tbtn.textContent = 'delete';

      datas.rows.appendChild(datas.td1);
      datas.rows.appendChild(datas.td2);
      datas.rows.appendChild(datas.td3);
      datas.rows.appendChild(datas.td4);
      datas.rows.appendChild(datas.td5);
      datas.rows.appendChild(datas.tbtn);

      body.appendChild(datas.rows);
}

  formulir.style.display = 'none';
  tampilkan.textContent = "show / hide"
  function show(){
    if (formulir.style.display == 'none') {
      formulir.style.display = 'block'
    } else{
      formulir.style.display = "none"
    }
  }
  function carinama(){
    var nilainama = cari.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[1];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }
  function filterfakultas(){
    var nilainama = filterfak.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[3];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }
  function filterprodi(){
    var nilainama = filterpro.value.toUpperCase();
    var pencarian = body.getElementsByTagName('tr');
    for (var i = 0; i < pencarian.length; i++) {
      var dataDalamRow = pencarian[i].getElementsByTagName('td')[4];
      if (dataDalamRow.textContent.toUpperCase().includes(nilainama)>0) {
        pencarian[i].style.display = ''
      }else{
        pencarian[i].style.display = 'none'
      }
    }
  }
