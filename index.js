const cari = document.querySelector('#kotak-pencarian');
const fakultas = document.querySelector('#fakultas');
const prodi = document.querySelector('#prodi');
const tableSiswa = document.querySelector('.table');
const id = document.getElementById('id');
const name = document.getElementById('name');
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
      datas.tbtn.innerText = prodi.value;

      datas.rows.appendChild(datas.td1);
      datas.rows.appendChild(datas.td2);
      datas.rows.appendChild(datas.td3);
      datas.rows.appendChild(datas.td5);
      datas.rows.appendChild(datas.tbtn);
      tableSiswa.appendChild(datas.rows);
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