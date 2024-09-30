const seminars = [
  {
    id: 1,
    title: "Hidden attractors in non-smooth  dynamical systems",
    speaker: {
      name: "هاني البدري بخيت ",
      grade: "ا.د",
    },
    startHour: "11:00",
    endHour: "13:00",
    day: "الثلاثاء",
    date: "2024-10-15",
    abstract: "Abstract still not available pr.Hani",
    Keywords: "",
    isVisible: "none",
  },
  {
    id: 2,
    title:
      "Nanomaterials-based Supercapacitors Prepared by Cost-effective and Simple Methods",
    speaker: {
      name: "نهى علوي الحبشي",
      grade: "د",
    },
    startHour: "11:00",
    endHour: "13:00",
    day: "الثلاثاء",
    date: "2024-10-29",
    abstract:
      "Although numerous methods have been reported to prepare nanomaterials, there is still a demand for lowering the required preparation time and cost while maintaining suitable material properties for electrochemical energy storage. In this presentation, an overview of our published studies highlights the utilization of cost-effective and simple methods for synthesizing nanomaterials of metal oxides/hydroxides, carbon forms, and conductive polymers. The synthesis methods include microwave-assisted heating, chemical bath deposition, hydrothermal reaction, ball-milling, sonication, electrodeposition, electrospinning, chemical and physical activations, and scree-printing. The relationship between the synthetic parameters and the structural properties is captured using an X-ray diffractometer, scanning electron microscope, transmission electron microscope, and others. The prepared nanomaterials with promising properties have been used to fabricate supercapacitor electrodes in aqueous electrolytes. The electrochemical techniques of cyclic voltammetry (CV), Galvanostatic charge-discharge (GCD), and electrochemical impedance spectroscopy (EIS) have been conducted to investigate the electrical charge storage mechanisms. The electrochemical performance of supercapacitors is evaluated in terms of specific capacitance, energy density, and power density. Most of our supercapacitors are built on flexible substrates such as carbon cloth and stainless-steel mesh, facilitating their future integration into smart textiles and portable electronics.",
    Keywords:
      "nanomaterials; supercapacitor; electrochemical energy; storage devices.",
    isVisible: "none",
  },
  {
    id: 3,
    title:
      "Growth enhancement of crop plants utilizing plant growth-promoting rhizobacteria",
    speaker: {
      name: "محمود صالح",
      grade: "د",
    },
    startHour: "11:00",
    endHour: "13:00",
    day: "الثلاثاء",
    date: "2024-11-05",
    abstract: "Abstract still not available Dr. Mahmoud",
    Keywords: "",
    isVisible: "none",
  },
  {
    id: 4,
    title: "Corrosion Engineering: A Growing Field for Future Scientists",
    speaker: {
      name: "جينات أسلن",
      grade: "د",
    },
    startHour: "11:00",
    endHour: "13:00",
    day: "الثلاثاء",
    date: "2024-12-03",
    abstract: "Abstract still not available Dr.Hanen",
    Keywords: "",
    isVisible: "none",
  },
];
const bandColors = [
  "edge yellow",
  "edge brown",
  "edge turq",
  "edge blue",
  "edge orange",
  "edge yellow",
  "edge brown",
  "edge turq",
  "edge orange",
];
const coloredDiv = document.getElementById("col-band-1");
const coloredDiv2 = document.getElementById("col-band-2");
const rendercoloredDivs = () => {
  const divHtml = bandColors
    .map((div) => {
      return `<div class="${div}"></div>`;
    })
    .join("");
  console.log(divHtml);
  coloredDiv.innerHTML = divHtml;
  coloredDiv2.innerHTML = divHtml;
};
rendercoloredDivs();
const contentContainer = document.getElementById("cont-items");
const chev = document.getElementById("chevron-arrow-left");

const renderAbstract = (id) => {
  let chevRot = "";
  const abstract = seminars.filter((item) => item.id === id);
  abstract[0].isVisible == "none"
    ? (abstract[0].isVisible = "block") && (chevRot = "945deg")
    : (abstract[0].isVisible = "none") && (chevRot = "-315deg");

  const abstcont = document.getElementById(`abst-${id}`);
  const chev = document.getElementById(`chevron-arrow-left-${id}`);
  abstcont.style.display = abstract[0].isVisible;
  chev.style.transform = `rotate(${chevRot})`;
};

const renderSeminars = (arr) => {
  const semHtml = arr
    .map((sem) => {
      // sem.isVisible = "none";
      return `
        <article class="art-arc">

        <div class="sem-content" id="rc-${sem.id}">

            <div class="tit-spk">
              <div class="sem-title" id="seminar-${sem.id}">
                      ${sem.title}
              </div>
              <div class="name" id="name-${sem.id}"><span lang="ar" direction="ltr">${sem.speaker.grade} </span>.<span lang="ar" direction="ltr">${sem.speaker.name}</span>
              </div>
            </div> </div>
            <hr>
                <div class="date">
                
                  <div class="date-sub"><span class="sp-date" style=":5px" lang="ar" direction="ltr">${sem.date}&nbsp; </span></div>
                  <div> <span class="sp-date" lang="ar" direction="ltr">   ${sem.day}  </span></div>        
                </div>                
              <div class="hour">
                <div class="hour-sub">
                  <span class="sp-date" lang="ar" direction="ltr">   ${sem.startHour} </span>
                  <span class="sp-date" lang="ar" direction="ltr">  -  ${sem.endHour} </span>
                </div>
                 <div class="btn"> <button onclick="renderAbstract(${sem.id})"><div id="chevron-arrow-left-${sem.id}"></div></button></div>
              </div>
               
                
              
              <div  id="abst-${sem.id}" style="display:${sem.isVisible}">
              <h3>Abstract</h3>
              <p>${sem.abstract}</p>
              </div>
          
          </div>
              
        </article>`;
    })
    .join("");

  contentContainer.innerHTML = semHtml;
};

renderSeminars(seminars);
