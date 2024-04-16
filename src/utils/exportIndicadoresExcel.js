import * as ExcelJS from "exceljs";

export function descargarIndicadores(datos, fileName) {
  const workbook = crearWorkbook();
  const worksheet = nombrarHoja(workbook, "datos");
  agregarEncabezados(worksheet, datos);
  agregarDatos(worksheet, datos, "semaforo");
  guardarArchivoExcel(workbook, fileName);
}

function crearWorkbook() {
  return new ExcelJS.Workbook();
}

function nombrarHoja(workbook, namesheet) {
  return workbook.addWorksheet(namesheet);
}

function agregarEncabezados(worksheet, datos) {
  const columns = Object.keys(datos[0]);
  worksheet.addRow(columns);
}

function agregarDatos(worksheet, datos, colStyle) {
  datos.forEach((obj) => {
    const values = Object.values(obj);
    worksheet.addRow(values).commit();
    const colStyleIndex = Object.keys(obj).indexOf(colStyle);
    const cell = worksheet.getCell(worksheet.rowCount, colStyleIndex + 1);
    aplicarEstiloCelda(cell, obj[colStyle]);
  });
}

function aplicarEstiloCelda(cell, colStyle) {
  const { bgColor, fontColor } = getColor(colStyle);
  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: bgColor },
  };
  cell.font = {
    color: { argb: fontColor },
  };
}

function getColor(value) {
  switch (true) {
    case value === 100:
      return { bgColor: "00FF00", fontColor: "000000" };
    case value >= 80 && value <= 99:
      return { bgColor: "FFFF00", fontColor: "000000" };
    case value < 80:
      return { bgColor: "FF0000", fontColor: "FFFFFF" };
    default:
      break;
  }
}

function guardarArchivoExcel(workbook, fileName) {
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  });
}
