import jsPDF from 'jspdf';
import 'jspdf-autotable';
import canvg from 'canvg';
import { deviceService } from './device_service';
import LZString from 'lz-string';
export const pdfService = {
    convertDataToPDF,
    convertTechnologyWiseDataToPDF,
};
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function getUTCDate(date){
  let rn=[]
  let today=new Date(date[0])
  // console.log(today);
  if(today.getTimezoneOffset()<0){
    today.setTime(today.getTime()+(today.getTimezoneOffset()*60000))
  }
  else{
    today.setTime(today.getTime()-(today.getTimezoneOffset()*60000))
  }
  let dd = today.getUTCDate();
  let mm = today.getUTCMonth()+1;
  if(mm<10){
    mm='0'+mm
  }
  let yyyy = today.getUTCFullYear();
  let h=today.getUTCHours();
  if(dd<10){
    dd='0'+dd
  }
  today =  yyyy+ '-' +mm +'-' + dd ;
  switch(true){
    case h>=0&&h<6: rn=[today+'T00:00:00',today+'T06:00:00']; break;
    case h>=6&&h<12: rn=[today+'T06:00:00',today+'T12:00:00']; break;
    case h>=12&&h<18: rn=[today+'T12:00:00',today+'T18:00:00']; break;
    case h>=18&&h<24: rn=[today+'T18:00:00',today+'T23:59:59']; break;
    default: rn=[today,today]; break;
  }
  console.log(rn);
  return rn;
}
function convertDataToPDF(data,fileName){
   //console.log(data);

  let columns=[{title: "", dataKey: "label"},
  {title: "Low", dataKey: "lowDeviceCount"},
  {title: "Medium", dataKey: "mediumDeviceCount"},
  {title: "Critical", dataKey: "criticalDeviceCount"},]

  let deviceColumns=[
  {title: "Device Name",dataKey: "deviceName"},
  {title: "Compliance",dataKey:"deviceCompliance"},
  {title: "Status",dataKey: "subClass"},
  ]
  // Only pt supported (not mm or in)
  var x=20
  var y=40
  var pdf = new jsPDF();
  var base64 = getBase64Image(document.getElementById("header"));
  //console.log(data);
  let mainData=JSON.parse(LZString.decompressFromUTF16(localStorage.getItem('data')));
  let count=0;
  data.forEach((useCase,index)=>{
    //console.log(useCase); 
    deviceService.fetchUseCaseData(
      useCase.mainCategory,
      useCase.subCategory,
      useCase.technology,
      useCase.useCaseName,
      "Critical",
      mainData,
      getUTCDate(JSON.parse(localStorage.date)),
      ).then(res=>{
      // console.log(res.useCaseName,res.devData)
      let tech=''
      count=count+1;
      if(useCase.technology.toLowerCase().split(' ').length>1){
        tech=useCase.technology.toLowerCase().split(' ')[1]
      }
      else{
        tech=useCase.technology.toLowerCase()
      }
      useCase.technology.toLowerCase()
      var svg = document.getElementsByClassName(tech+'_'+useCase.useCaseName.toLowerCase().split(' ').join('_'))[0].getElementsByTagName('svg')
      // var svg = document.getElementsByClassName(useCase.technology.toLowerCase()+'_'+useCase.useCaseName.toLowerCase().split(' ').join('_'))[0].getElementsByTagName('svg')
      for(var i=0;i<svg.length;i++){
        if (svg[i]){
          svg[i].outerHTML = svg[i].outerHTML.replace(/\r?\n|\r/g, '').trim();
        }
        // console.log(svg[i])
        var canvas1 = document.createElement('canvas');
        var context = canvas1.getContext('2d');
        context.clearRect(0, 0, canvas1.width, canvas1.height);
        canvg(canvas1, svg[i].outerHTML);
        var imgData1 = canvas1.toDataURL('image/png');
        // console.log(imgData1);
      }
      pdf.setFontSize(16)
      pdf.setFontStyle('bold')
      pdf.text(useCase.useCaseName,x,y)
      pdf.setFontStyle('normal')
      if(y>260){
        y=40
        pdf.addPage()
      }
      else{
        y=y+10
      }
      pdf.setFontSize(12)
      pdf.text('-Compliance Score: '+useCase.useCaseCompliance +'%',x+10,y)
      if(y>260){
        y=40
        pdf.addPage()
      }
      else{
        y=y+10
      }
      pdf.text('-Use Case Origin: ',x+10,y)
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+10
      }
      pdf.setFontSize(14)
      pdf.setFontStyle('bold')
      pdf.text(useCase.mainCategory+' -> '+useCase.subCategory+' -> '+useCase.technology,x+20,y)
      pdf.setFontStyle('normal')
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+10
      }
      pdf.setFontSize(12)
      pdf.text('-Details: ',x+10,y)
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+10
      }
      pdf.setFontSize(10)
      pdf.text('-Table:',x+20,y-5)
      pdf.autoTable(columns, [useCase], {
          theme: 'grid',
          styles: {overflow: 'linebreak', columnWidth: 'wrap', // a number, array or object (see margin below)
          fontSize: 10,
          cellPadding:{top:2,bottom:2,left:7,right:7},
          font: "helvetica", // helvetica, times, courier
          lineColor: 20,
          lineWidth: 0.5,
          fontStyle: 'normal', // normal, bold, italic, bolditalic
          fillColor: 190, // false for transparent or a color as described below
          textColor: 0,
          halign: 'center', // left, center, right
          valign: 'middle', // top, middle, bottom
        },
        startY:y,
        margin:{left: x+30},
        columnStyles: {
          mediumDeviceCount: {fillColor: [243, 156, 18], textColor: 255, fontStyle: 'bold'},
          criticalDeviceCount: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          lowDeviceCount: {fillColor: [39, 174, 96], textColor: 255, fontStyle: 'bold'}
        },
        addPageContent: function(data) {
          pdf.addImage(base64, 'JPEG', 0, 0);
        }
      });
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+(pdf.autoTable.previous.finalY/3)-5
      }
      pdf.text('-Chart:',x+20,y)
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+10
      }
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        y=y+10
      }
      pdf.addImage(imgData1, 'JPEG', x+20, y-25);
      y=y+65;
      pdf.text("-Top 5 Non-Compliant Devices",x+20,y)
      res.devData.length===0?pdf.text('- No Devices at Risk',x+30,y+10):pdf.autoTable(deviceColumns, (res.devData.sort((a,b)=>a.deviceCompliance-b.deviceCompliance).slice(0,5)), {
          theme: 'grid',
          styles: {overflow: 'linebreak', columnWidth: 'wrap', // a number, array or object (see margin below)
          fontSize: 10,
          cellPadding:{top:2,bottom:2,left:7,right:7},
          font: "helvetica", // helvetica, times, courier
          lineColor: 20,
          lineWidth: 0.5,
          fontStyle: 'normal', // normal, bold, italic, bolditalic
          fillColor: 190, // false for transparent or a color as described below
          textColor: 0,
          halign: 'center', // left, center, right
          valign: 'middle', // top, middle, bottom
        },
        startY:y+10,
        margin:{left: x+30},
        columnStyles: {
          subClass: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          deviceCompliance: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          deviceName: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
        },
        addPageContent: function(data) {
          pdf.addImage(base64, 'JPEG', 0, 0);
        }
      });
      if(y>260){
        y=40
        pdf.addPage()
        pdf.addImage(base64, 'JPEG', 0, 0);

      }
      else{
        // console.log(canvas1);
        y=y+(canvas1.height/4)-10
        // if(y>260){
        //   pdf.addPage()
        // }
      }
      // console.log(i);
      y=40
      if(index!==data.length-1){
        pdf.addPage()
      }
      if(count===data.length){
      pdf.save(fileName+res.useCaseName+'.pdf');}
    })
  })
  // console.log(y);
  //pdf.save(fileName+'.pdf');
  // window.open(pdf.output('bloburl'));
  return true;
}
function convertTechnologyWiseDataToPDF(data,fileName){
  // console.log(data);
  // let columns=[{title: "Category", dataKey: "mainCategory"},
  // {title: "subCategory", dataKey: "subCategory"},
  // {title: "technology", dataKey: "technology"},
  // {title: "useCaseName", dataKey: "useCaseName"},
  // {title: "useCaseCompliance", dataKey: "useCaseCompliance"},]
  let columns=[{title: "", dataKey: "label"},
  {title: "Low", dataKey: "lowDeviceCount"},
  {title: "Medium", dataKey: "mediumDeviceCount"},
  {title: "Critical", dataKey: "criticalDeviceCount"},]
  let deviceColumns=[{title: "Device Name", dataKey: "deviceName"},
  {title: "Compliance Status", dataKey: "subClass"},
  {title: "Compliance Score", dataKey: "deviceCompliance"},]

  // Only pt supported (not mm or in)
  var x=20
  var y=40
  var pdf = new jsPDF();

  var base64 = getBase64Image(document.getElementById("header"));

  // Only pt supported (not mm or in)
  // let text=40
  // let start=60
  // let size=30
  // let pageBreak='auto'
  let mainData=JSON.parse(LZString.decompressFromUTF16(localStorage.getItem('data')));
  let countUseCase=0;
  console.log(data);
  let c=1;
  let i=0;
  const totalUseCases=data.map(tech=>tech.useCases.length).reduce((a,b)=>a+b,0);
  data.forEach((techUseCase,techIndex)=>{
  // loop1:
  // techUseCase=data[i];
    
    let useCases=techUseCase.useCases
    pdf.addImage(base64, 'JPEG', 0, 0);
    pdf.setFontSize(50)
    pdf.text(techUseCase.technology,60,150)
    pdf.addPage()
    console.log(c);
    useCases.forEach((useCase,index)=>{
    // deviceService.fetchUseCaseData(
    //   useCase.mainCategory,
    //   useCase.subCategory,
    //   useCase.technology,
    //   useCase.useCaseName,
    //   "Critical",
    //   mainData,
    //   JSON.parse(localStorage.date),
    //   ).then(res=>{
          // countUseCase=countUseCase+1;
          // if(index===0){

          // }
          let tech=''
          // let techIndex=data.findIndex(data=>data.technology===useCase.technology)
          // let totalUseCase=data[techIndex].useCases.length;
          if(useCase.technology.toLowerCase().split(' ').length>1){
            tech=useCase.technology.toLowerCase().split(' ')[1]
          }
          else{
            tech=useCase.technology.toLowerCase()
          }
          useCase.technology.toLowerCase()
          var svg = document.getElementsByClassName(tech+'_'+useCase.useCaseName.toLowerCase().split(' ').join('_'))[0].getElementsByTagName('svg')
          for(var i=0;i<svg.length;i++){
            if (svg[i]){
              svg[i].outerHTML = svg[i].outerHTML.replace(/\r?\n|\r/g, '').trim();
            }
            // console.log(svg[i])
            var canvas1 = document.createElement('canvas');
            var context = canvas1.getContext('2d');
            context.clearRect(0, 0, canvas1.width, canvas1.height);
            canvg(canvas1, svg[i].outerHTML);
            var imgData1 = canvas1.toDataURL('image/png');
            // console.log(imgData1);
          }
          pdf.setFontSize(16)
          pdf.setFontStyle('bold')
          pdf.text(useCase.useCaseName,x,y)
          pdf.setFontStyle('normal')
          if(y>260){
            y=40
            pdf.addPage()
          }
          else{
            y=y+10
          }
          pdf.setFontSize(12)
          pdf.text('-Compliance Score: '+useCase.useCaseCompliance +'%',x+10,y)
          if(y>260){
            y=40
            pdf.addPage()
          }
          else{
            y=y+10
          }
          pdf.text('-Use Case Origin: ',x+10,y)
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);

          }
          else{
            y=y+10
          }
          pdf.setFontSize(14)
          pdf.setFontStyle('bold')
          pdf.text(useCase.mainCategory+' -> '+useCase.subCategory+' -> '+useCase.technology,x+20,y)
          pdf.setFontStyle('normal')
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);

          }
          else{
            y=y+10
          }
          pdf.setFontSize(12)
          pdf.text('-Details: ',x+10,y)
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);

          }
          else{
            y=y+10
          }
          pdf.setFontSize(10)
          pdf.text('-Table:',x+20,y-5)
          pdf.autoTable(columns, [useCase], {
              theme: 'grid',
              styles: {overflow: 'linebreak', columnWidth: 'wrap', // a number, array or object (see margin below)
              fontSize: 10,
              cellPadding:{top:2,bottom:2,left:7,right:7},
              font: "helvetica", // helvetica, times, courier
              lineColor: 20,
              lineWidth: 0.5,
              fontStyle: 'normal', // normal, bold, italic, bolditalic
              fillColor: 190, // false for transparent or a color as described below
              textColor: 0,
              halign: 'center', // left, center, right
              valign: 'middle', // top, middle, bottom
            },
            startY:y,
            margin:{left: x+30},
            columnStyles: {
              mediumDeviceCount: {fillColor: [243, 156, 18], textColor: 255, fontStyle: 'bold'},
              criticalDeviceCount: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
              lowDeviceCount: {fillColor: [39, 174, 96], textColor: 255, fontStyle: 'bold'}
            },
            addPageContent: function(data) {
              pdf.addImage(base64, 'JPEG', 0, 0);
            }
          });
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);

          }
          else{
            y=y+(pdf.autoTable.previous.finalY/3)-5
          }
          pdf.text('-Chart:',x+20,y)
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);

          }
          else{
            y=y+10
          }
          pdf.addImage(imgData1, 'JPEG', x+20, y-20);
          // y=y+65;
          // pdf.text("-Top 5 Non-Compliant Devices",x+20,y)
          // res.devData.length===0?pdf.text('- No Devices at Risk',x+30,y+10):pdf.autoTable(deviceColumns, (res.devData.sort((a,b)=>a.deviceCompliance-b.deviceCompliance).slice(0,5)), {
          //     theme: 'grid',
          //     styles: {overflow: 'linebreak', columnWidth: 'wrap', // a number, array or object (see margin below)
          //     fontSize: 10,
          //     cellPadding:{top:2,bottom:2,left:7,right:7},
          //     font: "helvetica", // helvetica, times, courier
          //     lineColor: 20,
          //     lineWidth: 0.5,
          //     fontStyle: 'normal', // normal, bold, italic, bolditalic
          //     fillColor: 190, // false for transparent or a color as described below
          //     textColor: 0,
          //     halign: 'center', // left, center, right
          //     valign: 'middle', // top, middle, bottom
          //   },
          //   startY:y+10,
          //   margin:{left: x+30},
          //   columnStyles: {
          //     subClass: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          //     deviceCompliance: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          //     deviceName: {fillColor: [192, 57, 43], textColor: 255, fontStyle: 'bold'},
          //   },
          //   addPageContent: function(data) {
          //     pdf.addImage(base64, 'JPEG', 0, 0);
          //   }
          // });
          if(y>260){
            y=40
            pdf.addPage()
            pdf.addImage(base64, 'JPEG', 0, 0);
          }
          else{
            y=y+(canvas1.height/4)-10
          }
          pdf.setFontSize(12)
          y=40
          // if(index!==techUseCase.useCases.length-1){
          //   pdf.addPage()
          // }
          // if(countUseCase===totalUseCases){
          //   pdf.save(fileName+'.pdf')
          // };
          if(techIndex!==data.length-1){
            pdf.addPage()
          }
          // if(index===useCases.length-1){
          //  continue;
          // }
        // })
    })
  
  })
  pdf.save(fileName+'.pdf')
  
  // doc.save('tableFull.pdf');
  // window.open(pdf.output('bloburl'));
  return true;
}
