console.log('test records_generator')
arrayIndexValue= ["PESO",[1,2],0];
fields=["type","value","patientId"];
setting=[0,true];
values= [['hr001','10kg','test','a'],['hr002','20kg','test','b'],['hr003','30kg','test','c'],['hr004','40kg','test','c']]

function createRecordsForValue(fields, arrayIndexValue, setting, valuesXlsx) {
  //for example,
  //arrayIndexValue= ["PESO",[1,2],0],
  //"fields"=["type","value","patientId"],
  //setting:[0,true], prendi in considerazione il vettore di valuesXlsx solo se nella pos 0 è != null
  //values= [['hr001','10kg','test','a'],['hr002','20kg','test','b'],['hr003','30kg','test','c'],['hr004','40kg','test','c']]
  let listOfRecords=[];
  for (const rowValue of valuesXlsx) {
    if (setting !== null && rowValue[setting[0]] === null) {
      continue;
    }
    const record = {};
    for (let indexField = 0; indexField < fields.length; indexField++) {
      let valueResult = '';
      const field = fields[indexField];
      const indexValue = arrayIndexValue[indexField];
      if (typeof indexValue === 'string') {
        valueResult = indexValue;
      } else if (indexValue.length > 1) {
        valueResult = indexValue.map(val => rowValue[val]).join('');
      } else {
        valueResult = rowValue[indexValue];
      }
      record[field] = valueResult;
    }
    console.log(record);
    listOfRecords.push(record);
  }
  return listOfRecords
};
//restituisce ad esempio la seguente lista
// [
//   { type: 'PESO', value: '10kgtest', patientId: 'hr001' },
//   { type: 'PESO', value: '20kgtest', patientId: 'hr002' },
//   { type: 'PESO', value: '30kgtest', patientId: 'hr003' },
//   { type: 'PESO', value: '40kgtest', patientId: 'hr004' }
// ]
let lista=createRecordsForValue(fields,arrayIndexValue,setting,values);
console.log(lista);
