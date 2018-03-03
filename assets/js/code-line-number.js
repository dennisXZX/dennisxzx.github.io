/*
* This file adds number of line to <code></code>
* */

function numbers () {
	const fields = document.getElementsByTagName("code");

  for (field in fields) {
    let num = 0;
    const select = fields[field].innerText;
    let select_f;
    if (select) {
      select_f = select.split(/\n/);
    }
    const tab = document.createElement("table");

    if(typeof(fields[field]) === 'object') {
      fields[field].innerHTML = "";
      fields[field].appendChild(tab);
    }

    for (line in select_f) {
      const row = document.createElement("tr");
      const col = document.createElement("th");
      const colc = document.createElement("th");
      col.innerText = num + 1;
      colc.innerText = select_f[line];
      row.appendChild(col);
      row.appendChild(colc);
      tab.appendChild(row);
      num = num + 1;

      // style the code line number
      col.style.textAlign = "right";
      colc.style.textAlign = "left";
      tab.style.border = "0";
      col.style.border = "0";
      colc.style.border = "0";
      col.style.padding = "3px";
      colc.style.padding = "3px 3px 3px 13px";
      col.style.borderRight = "2px solid #777777";
    }
  }
}

window.onload = numbers();
