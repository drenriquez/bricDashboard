console.log('test records_generator')
arrayIndexValue= ["PESO",1,0];
fields=["type","value","patientId"];
setting=[0,true];
values= [['hr001','10kg','test','a'],['hr002','20kg','test','b'],['hr003','30kg','test','c'],['hr004','40kg','test','c']]

function createRecordsForValue(fields,arrayIndexValue,setting,valuesXlsx){
  //for example,
  //arrayIndexValue= ["PESO",159,0]
  //"fields"=["type","value","patientId"],
  //setting:[0,true], prendi in considerazione il vettore di valuesXlsx solo se nella pos 0 è != null
  //values= [[..,..,..,..],[..,..,..,..]]

  let valueResult='';
  for(let rowValue of valuesXlsx){
    let record = {};
    if(setting!==null && rowValue[setting[0]]===null){
      continue
    }
    else{
      for(let indexfield=0;indexfield<fields.length;indexfield++){
        if(typeof arrayIndexValue[indexfield]==='string'){
          valueResult=arrayIndexValue[indexfield]
        }
        else if(arrayIndexValue[indexfield].length>1){
          for(let val of arrayIndexValue[indexfield]){
            valueResult=valueResult+rowValue[arrayIndexValue[indexfield]];
          }
        }
        else{
          valueResult=rowValue[arrayIndexValue[indexfield]];
        }

        record[fields[indexfield]]=valueResult;
      }
      console.log(record)
    }
  }
};
createRecordsForValue(fields,arrayIndexValue,setting,values)
