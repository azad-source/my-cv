import { contactsInfo, data } from "data";
import * as docx from "docx";
import { BorderStyle } from "docx";
import { saveAs } from "file-saver";

const { Document, Paragraph, TextRun, Packer } = docx;

const {
  // about,
  name,
  // avatar,
  // contacts,
  education,
  experience,
  langs,
  // portfolios,
  skills,
  // position,
} = data;

const { city, post, country, email, phone, linkedin } = contactsInfo;

const space = (value: number = 20) =>
  new Paragraph({ spacing: { after: value } });

export class CV {
  public font;

  public headColor;

  public textSpaceAfter;

  public doc: docx.File | null;

  public textFontSize: number;

  public h1FontSize: number;

  public h2FontSize: number;

  public h3FontSize: number;

  public h4FontSize: number;

  constructor() {
    this.doc = null;
    this.font = "Helvetica";
    this.headColor = "555555";
    this.textSpaceAfter = 100;
    this.textFontSize = 22;
    this.h1FontSize = 40;
    this.h2FontSize = 32;
    this.h3FontSize = 26;
    this.h4FontSize = 22;
    this.init();
  }

  experience() {
    const arr: any = [this.h2("Work Experience"), space()];
    const reversed = experience.reverse();
    reversed.forEach(
      ({ company, date, position, description, languages, tools }) => {
        arr.push(space(1));
        arr.push(this.h3(position));
        arr.push(this.text(company, "888888"));
        arr.push(this.text(date, "888888"));
        arr.push(this.text(description));
        if (languages) arr.push(this.text(languages, "555555"));
        if (tools) arr.push(this.text(tools, "555555"));
      }
    );
    return arr;
  }

  education() {
    const arr: any = [this.h2("Education"), space()];
    const reversed = education.reverse();
    reversed.forEach(({ establishment, date, degree }) => {
      arr.push(space(1));
      arr.push(this.h3(degree));
      arr.push(this.text(establishment, "888888"));
      arr.push(this.text(date, "888888"));
    });
    return arr;
  }

  skills() {
    const skillsArr: any = [];

    skills.forEach(({ items }) => {
      items.forEach((item) => {
        skillsArr.push(`${item.name}`);
      });
    });

    return [
      this.h2("Skills"),
      space(),
      this.text(skillsArr.join(", "), "888888"),
    ];
  }

  languages() {
    const arr: any = [this.h3(`Languages`), space(1)];
    langs.forEach(({ language, level, description }) => {
      arr.push(this.text(`${language}: ${level} (${description})`, "555555"));
      arr.push(space(1));
    });
    return arr;
  }

  init() {
    this.doc = new Document({
      background: { color: "EEEEEE" },
      sections: [
        {
          children: [
            this.h1(name),
            space(),

            // Contacts
            this.text(`${city} ${post}, ${country}`, "555555", 22),
            this.text(email, "0366d6", 22),
            this.text(phone, "555555", 22),
            this.text(linkedin, "0366d6", 22),

            space(200),
            ...this.experience(),

            space(200),
            ...this.education(),

            // Skills
            space(200),
            ...this.skills(),

            // More
            space(200),
            this.h2(`More`),
            space(),
            ...this.languages(),
          ],
        },
      ],
    });
  }

  download() {
    if (this.doc) {
      Packer.toBlob(this.doc).then((blob) => {
        saveAs(blob, "Azad_MAMEDOV_CV_En.docx");
      });
    }
  }

  h1(text: string) {
    return new Paragraph({
      children: [
        new TextRun({
          text,
          bold: true,
          size: 40,
          color: this.headColor,
          font: { name: this.font },
        }),
      ],
      border: {
        bottom: {
          color: "cccddd",
          style: BorderStyle.SINGLE,
          size: 6,
          space: 5,
        },
      },
    });
  }

  h2(text: string) {
    return new Paragraph({
      children: [
        new TextRun({
          text,
          bold: false,
          size: 32,
          color: this.headColor,
          font: { name: this.font },
        }),
      ],
      border: {
        bottom: {
          color: "cccddd",
          style: BorderStyle.SINGLE,
          size: 6,
          space: 5,
        },
      },
    });
  }

  h3(text: string) {
    return new Paragraph({
      children: [
        new TextRun({
          text,
          bold: true,
          size: 24,
          color: this.headColor,
          font: { name: this.font },
        }),
      ],
      spacing: { after: this.textSpaceAfter },
    });
  }

  h4(text: string) {
    return new Paragraph({
      children: [
        new TextRun({
          text,
          bold: true,
          size: 22,
          color: this.headColor,
          font: { name: this.font },
        }),
      ],
    });
  }

  text(
    text: string,
    color: string = "000000",
    size: number = this.textFontSize,
    breaks: number = 0
  ) {
    return new Paragraph({
      children: [
        new TextRun({
          text,
          bold: false,
          size,
          font: { name: this.font },
          color,
          break: breaks,
          characterSpacing: 10,
        }),
      ],
      spacing: { after: this.textSpaceAfter },
    });
  }
}
