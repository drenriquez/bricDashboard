const fs = require('fs');
const XLSX = require('xlsx');

console.log('test records_generator')
arrayIndexValue= ["PESO",[1,2],0];
fields=["type","value","patientId"];
setting=[0,true];
values= [
  ['hr001','10kg','test1','a','bio1','m1','pid1','161cm1','eur1','61'],
  [null,'20kg','test2','b','bio2','f2','pid2','161cm2','eur2','62'],
  ['hr003','30kg','test3','c','bio3','m3','pid3','161cm3','eur3','63'],
  ['hr004','40kg','test4','c','bio4','f4','pid4','161cm4','eur4','64']
]

function createRecordsForValue(fields, arrayIndexValue, setting, valuesXlsx) {
  //for example,
  //arrayIndexValue= ["PESO",[1,2],0],
  //"fields"=["type","value","patientId"],
  //setting:[0,true], prendi in considerazione il vettore di valuesXlsx solo se nella pos 0 è != null
  //values= [['hr001','10kg','test','a'],['hr002','20kg','test','b'],['hr003','30kg','test','c'],['hr004','40kg','test','c']]
  let listOfRecords=[];
  for (const rowValue of valuesXlsx) {
    if (setting !== null && (rowValue[setting[0]] === null|| rowValue[setting[0]]===undefined  )) {

      continue;
    }
    const record = {};
    for (let indexField = 0; indexField < fields.length; indexField++) {
      let valueResult = '';
      const field = fields[indexField];
      const indexValue = arrayIndexValue[indexField];
      if (typeof indexValue === 'string') {
        valueResult = indexValue;
      } else if (indexValue===null) {
        valueResult = null;
      } else if (indexValue.length > 1) {
        valueResult = indexValue.map(val => rowValue[val]).join('');
      } else {
        valueResult = rowValue[indexValue];
      }
      record[field] = valueResult;
    }
    //console.log(record);
    listOfRecords.push(record);
  }
  //console.log(listOfRecords);
  return listOfRecords
};
//restituisce ad esempio la seguente lista
// [
//   { type: 'PESO', value: '10kgtest', patientId: 'hr001' },
//   { type: 'PESO', value: '20kgtest', patientId: 'hr002' },
//   { type: 'PESO', value: '30kgtest', patientId: 'hr003' },
//   { type: 'PESO', value: '40kgtest', patientId: 'hr004' }
// ]


//let lista=createRecordsForValue(fields,arrayIndexValue,setting,values);
//console.log(lista);
async function readSchema() {
  return new Promise((resolve, reject) => {
    fs.readFile('schema.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      // Analizza i dati del file JSON
      const jsonData = JSON.parse(data);
      // Usa i dati come necessario
      //console.log(jsonData);
      resolve(jsonData);
    });
  });
}

// console.log(Object.keys(tabella));
// (async function main(){
//   const res=await readSchema()
//   //console.log(res);
//   for(let tab of res){
//     console.log(Object.keys(tab)[0])
//   }
// })()
let array_schema=[
  {
    "Patient":{
        "fields":["centerId","biobankCode","pid","code"],
        "setting":[0,true],
        "values":[
            ["dd74ba73-8a99-41dd-8974-0a6912d3591a",1,6,0]
        ]
    }
  },
  {
    "Anagrafic":{
        "fields":["type","value","patientId"],
        "setting":[0,true],
        "values":[
            ["SESSO",null,0],
            ["PESO",1,0],
            ["ALTEZZA",7,0],
            ["ANNI COMPIUTI",9,0],
            ["ETNIA",8,0],
            ["GRADO DI ISTRUZIONE",2,0],
        ]
    }
  }
]

function jsonGeneratorForTable (array_schema, excelData){
  let recordsForTable=[];
  for (let tab of array_schema){
    const tableObject={};
    const nameTable=Object.keys(tab)[0];
    const fields=tab[nameTable]['fields'];
    const setting=tab[nameTable]['setting'];
    const valuesMatrix=tab[nameTable]['values'];
    let recordsList=[];
    // Itera attraverso la matrice di valori della tabella e crea un elenco di record per ogni singolo array di valori
    for(let valArray of valuesMatrix){
     const listOfSingleArrayValues = createRecordsForValue(fields, valArray, setting, excelData)
      recordsList.push(...listOfSingleArrayValues)
    }
    tableObject[nameTable]=recordsList;
    recordsForTable.push(tableObject);
   // console.log(recordsForTable)
  }
//console.log(recordsForTable)
 return recordsForTable
}




//jsonGeneratorForTable(array_schema,values)
(async function main(){
  const workbook = XLSX.readFile('TEST_INAIL2da_caricare.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const dataXlsx = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
 let tablesJson=[]
  //console.log(dataXlsx.length);
  readSchema().then((res)=>{
    //console.log(res)
    tablesJson=jsonGeneratorForTable(res,dataXlsx);
    console.log(tablesJson[4]);
  })

  // for(let tab of res){
  //   console.log(Object.keys(tab)[0])
  // }
  //jsonGeneratorForTable(Schema,dataXlsx)
})()
