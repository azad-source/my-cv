import {
  Page,
  Text,
  View,
  Link,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { data } from "data";
import JosefinSansRegular from "fonts/JosefinSans-Regular.ttf";
import JosefinSansBold from "fonts/JosefinSans-Bold.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  avatar,
  name,
  positionTitle,
  contacts,
  experience,
  education,
  courses,
  skills,
  langs,
} = data;

const socials = contacts.filter(({ title }) =>
  ["e-mail", "linkedin", "location", "phone"].includes(title)
);

const filteredExperience = experience.filter(
  (i) => !i.company.includes("SMARTEC")
);

Font.register({ family: "Josefin-Sans-Regular", src: JosefinSansRegular });
Font.register({ family: "Josefin-Sans-Bold", src: JosefinSansBold });

const colors = {
  mainBgColor: "rgba(252, 255, 247, 0.9)",
  headBgColor: "rgba(248, 252, 235, 0.9)",
  headTextColor: "rgba(122, 60, 52, 0.8)",
  mainTextColor: "rgba(0, 0, 0, 0.9)",
  secondaryTextColor: "rgba(120, 120, 120, 0.8)",
  thirdTextColor: "rgba(128, 128, 254, 0.8)",
  sectionTextColor: "rgba(101, 76, 79, 0.9)",
  borderColor: "rgba(192, 202, 173, 0.9)",
  linkColor: "rgba(30, 70, 130, 0.9)",
};

const sizes = {
  pagePadding: "40px",
  leftContentWidth: "300px",
};

const font = {
  head1: 26,
  head2: 18,
  head3: 12,
  mainText: 10,
  secondaryText: 10,
};

const lineHeight = {
  mainText: 1.3,
  secondaryText: 1.2,
};

const styles = StyleSheet.create({
  link: {
    textDecoration: "none",
    color: colors.linkColor,
  },
  document: { height: "100vh" },
  page: {
    backgroundColor: colors.mainBgColor,
    fontFamily: "Josefin-Sans-Regular",
    color: colors.mainTextColor,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: `1px solid ${colors.borderColor}`,
    padding: `${sizes.pagePadding} ${sizes.pagePadding} 5px`,
    backgroundColor: colors.headBgColor,
  },
  headInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  headName: {
    fontSize: font.head1,
    fontFamily: "Josefin-Sans-Bold",
    lineHeight: 1,
    color: colors.sectionTextColor,
    textTransform: "uppercase",
  },
  headPosition: {
    fontSize: font.head2,
    color: "rgb(32, 100, 217)",
  },
  headContacts: {
    fontSize: font.mainText,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 4,
  },
  headContactsItem: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    width: "calc(45% - 25px/2)",
    alignItems: "center",
  },
  headAvatar: {
    minWidth: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    marginTop: -15,
    backgroundColor: "rgba(100,100,100,0.2)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    padding: `15px ${sizes.pagePadding} ${sizes.pagePadding}`,
    lineHeight: lineHeight.mainText,
  },
  contentLeft: {
    minWidth: sizes.leftContentWidth,
    width: sizes.leftContentWidth,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  contentRight: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flexGrow: 1,
    overflow: "hidden",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  contentSectionTitle: {
    fontSize: font.head3,
    fontFamily: "Josefin-Sans-Bold",
    textTransform: "uppercase",
    padding: "2px 0",
    borderBottom: `3px solid ${colors.borderColor}`,
  },
  contentSectionList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  listItemTitle: {
    fontSize: font.mainText,
    fontFamily: "Josefin-Sans-Bold",
    color: colors.secondaryTextColor,
  },
  listItemFieldTitle: {
    fontSize: font.mainText,
  },
  listItemPlace: {
    fontSize: font.mainText,
    textTransform: "uppercase",
    color: colors.thirdTextColor,
  },
  listItemDateLocation: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    color: colors.secondaryTextColor,
    fontSize: font.mainText,
  },
  date: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  listItemDescription: {
    fontSize: font.secondaryText,
    lineHeight: lineHeight.mainText,
  },
  descriptionTitle: {
    display: "flex",
  },
  descriptionList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  descriptionListItem: { paddingLeft: 5 },
  contentSubSection: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    gap: 4,
  },
  contentSubSectionTitle: {
    fontSize: font.mainText,
    textTransform: "uppercase",
    color: colors.secondaryTextColor,
  },
  contentSubSectionList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontSize: font.secondaryText,
  },
  contentSubSectionListItem: {
    fontSize: font.secondaryText,
    lineHeight: lineHeight.secondaryText,
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillsListItem: {
    display: "flex",
    border: "none",
    width: "auto",
    lineHeight: lineHeight.secondaryText,
  },
  languagesList: {
    gap: 0,
  },
});

export const CvPdfView = () => {
  return (
    <Document style={styles.document} pageMode="fullScreen" title="CV">
      <Page size="A4" style={styles.page}>
        <View style={styles.head}>
          <View style={styles.headInfo}>
            <Text style={styles.headName}>{name}</Text>
            <Text style={styles.headPosition}>{positionTitle}</Text>
            <View style={styles.headContacts}>
              {socials.map(({ href, value, icon }) => (
                <View key={href} style={styles.headContactsItem}>
                  <FontAwesomeIcon icon={icon} />
                  {href ? (
                    <Link href={href} style={styles.link}>
                      {value}
                    </Link>
                  ) : (
                    <Text>{value}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.headAvatar}>
            <Image src={avatar} />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <View style={styles.contentSection}>
              <Text style={styles.contentSectionTitle}>Expirence</Text>
              <View style={styles.contentSectionList}>
                {filteredExperience.map(
                  ({ company, date, position, location, shortDescription }) => (
                    <View key={company} style={styles.listItem}>
                      <Text style={styles.listItemTitle}>{position}</Text>
                      <Text style={styles.listItemPlace}>{company}</Text>
                      <View style={styles.listItemDateLocation}>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={styles.location}>({location})</Text>
                      </View>
                      <View style={styles.listItemDescription}>
                        <Text style={styles.descriptionTitle}>
                          {shortDescription.title}
                        </Text>
                        <View style={styles.descriptionList}>
                          {shortDescription.list.map((i) => (
                            <Text key={i} style={styles.descriptionListItem}>
                              - {i}
                            </Text>
                          ))}
                        </View>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
          <View style={styles.contentRight}>
            <View style={styles.contentSection}>
              <Text style={styles.contentSectionTitle}>Education</Text>
              <View style={styles.contentSectionList}>
                {education.map(
                  ({ date, degree, fieldTitle, establishment, location }) => (
                    <View key={establishment + degree} style={styles.listItem}>
                      <Text style={styles.listItemTitle}>{degree}</Text>
                      <Text style={styles.listItemFieldTitle}>
                        {fieldTitle}
                      </Text>
                      <Text style={styles.listItemPlace}>{establishment}</Text>
                      <View style={styles.listItemDateLocation}>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={styles.location}>({location})</Text>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
            <View style={styles.contentSection}>
              <Text style={styles.contentSectionTitle}>Training / Courses</Text>
              <View style={styles.contentSectionList}>
                {courses.map(
                  ({
                    date,
                    degree,
                    shortDescription,
                    establishment,
                    location,
                  }) => (
                    <View key={establishment} style={styles.listItem}>
                      <Text style={styles.listItemTitle}>{degree}</Text>
                      <Text style={styles.listItemPlace}>{establishment}</Text>
                      <View style={styles.listItemDateLocation}>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={styles.location}>({location})</Text>
                      </View>
                      <View style={styles.listItemDescription}>
                        <Text style={styles.descriptionTitle}>
                          {shortDescription.title}
                        </Text>
                        <View style={styles.descriptionList}>
                          {shortDescription.list.map((i) => (
                            <Text key={i} style={styles.descriptionListItem}>
                              - {i}
                            </Text>
                          ))}
                        </View>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
            <View style={styles.contentSection}>
              <Text style={styles.contentSectionTitle}>Skills</Text>
              <View style={[styles.contentSectionList, styles.skills]}>
                {skills.map((section) => (
                  <View key={section.title} style={styles.contentSubSection}>
                    <Text style={styles.contentSubSectionTitle}>
                      {section.title}
                    </Text>
                    <View style={styles.contentSubSectionList}>
                      {section.items.map((i) => (
                        <Text
                          key={i.name}
                          style={[styles.listItem, styles.skillsListItem]}
                        >
                          {i.name}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.contentSection}>
              <Text style={styles.contentSectionTitle}>Languages</Text>
              <View style={[styles.contentSectionList, styles.languagesList]}>
                {langs.map((l) => (
                  <Text
                    key={l.language}
                    style={styles.contentSubSectionListItem}
                  >
                    {l.language} - {l.level}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
