import {
  Page,
  Text,
  View,
  Link,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { data } from "data";
import JosefinSansRegular from "fonts/JosefinSans-Regular.ttf";
import JosefinSansBold from "fonts/JosefinSans-Bold.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  name,
  shortAbout,
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

const ColorScheme = {
  mainColor: "#15ABAB",
};

const colors = {
  mainBgColor: "transparent",
  headBgColor: "#fff",
  headTextColor: "#000",
  mainTextColor: "rgba(0, 0, 0, 0.8)",
  secondaryTextColor: "rgba(0, 0, 0, 0.6)",
  thirdTextColor: "rgba(0, 0, 0, 0.4)",
  sectionTextColor: "rgba(101, 76, 79, 0.9)",
  sectionTitleColor: ColorScheme.mainColor,
  borderColor: ColorScheme.mainColor,
  linkColor: "rgba(30, 70, 130, 0.9)",
};

const sizes = {
  pagePaddingX: "15px",
  pagePaddingY: "20px",
  leftContentWidth: "375px",
  avatarSize: "80px",
  contentSectionGap: "10px",
};

const font = {
  head1: 26,
  head2: 16,
  head3: 12,
  head4: 10,
  mainText: 10,
  secondaryText: 10,
};

const lineHeight = {
  mainText: 1.3,
  secondaryText: 1.2,
};

const styles = StyleSheet.create({
  document: { height: "100vh" },
  page: {
    fontFamily: "Josefin-Sans-Regular",
    color: colors.mainTextColor,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: `${sizes.pagePaddingY} ${sizes.pagePaddingX} 0`,
    backgroundColor: colors.headBgColor,
    boxSizing: "border-box",
  },
  headInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  headName: {
    fontSize: font.head2,
    fontFamily: "Josefin-Sans-Bold",
    lineHeight: 1,
    color: colors.headTextColor,
    textTransform: "uppercase",
  },
  headPosition: {
    fontSize: font.head3,
    color: colors.headTextColor,
  },
  headContacts: {
    width: 450,
    fontSize: font.head4,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 4,
    color: colors.headTextColor,
  },
  headContactsItem: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    width: "calc(45% - 25px/2)",
    alignItems: "center",
    color: colors.headTextColor,
  },
  headContactsItemLink: {
    color: colors.headTextColor,
  },
  headAvatar: {
    minWidth: sizes.avatarSize,
    height: sizes.avatarSize,
    borderBottom: `3px solid #fff`,
    overflow: "hidden",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  headAvatarImage: {
    display: "flex",
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
    padding: `10px ${sizes.pagePaddingX} ${sizes.pagePaddingY}`,
    lineHeight: lineHeight.mainText,
  },
  contentHorizontal: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  },
  aboutText: {
    fontSize: font.mainText,
  },
  contentLeft: {
    minWidth: sizes.leftContentWidth,
    width: sizes.leftContentWidth,
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
  },
  contentRight: {
    display: "flex",
    flexDirection: "column",
    gap: sizes.contentSectionGap,
    flexGrow: 1,
    overflow: "hidden",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  contentSectionTitle: {
    fontSize: font.head4,
    fontFamily: "Josefin-Sans-Bold",
    textTransform: "uppercase",
    padding: "2px 0",
    borderBottom: `2px solid ${colors.borderColor}`,
    color: colors.sectionTitleColor,
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
    color: colors.mainTextColor,
    marginBottom: 4,
  },
  listItemFieldTitle: {
    fontSize: font.mainText,
  },
  listItemPlace: {
    fontSize: font.mainText,
    color: colors.secondaryTextColor,
  },
  listItemDateLocation: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    color: colors.thirdTextColor,
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
    flexDirection: "row",
    lineHeight: 0.5,
    gap: "10px",
  },
  contentSubSectionTitle: {
    fontSize: font.mainText,
    color: colors.secondaryTextColor,
  },
  contentSubSectionList: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: font.secondaryText,
  },
  contentSubSectionListItem: {
    fontSize: font.secondaryText,
    lineHeight: lineHeight.secondaryText,
  },
  skills: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "8px",
  },
  skillsListItem: {
    display: "flex",
    border: "none",
    width: "auto",
    lineHeight: 0.5,
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
                <View key={`${href}-${value}`} style={styles.headContactsItem}>
                  <FontAwesomeIcon icon={icon} />
                  {href ? (
                    <Link href={href} style={styles.headContactsItemLink}>
                      {value}
                    </Link>
                  ) : (
                    <Text>{value}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
          {/* <View style={styles.headAvatar}>
            <Image src={avatar} style={styles.headAvatarImage} />
          </View> */}
        </View>
        <View style={styles.content}>
          <View style={styles.contentSection}>
            <Text style={styles.contentSectionTitle}>About</Text>
            <Text style={styles.aboutText}>{shortAbout}</Text>
          </View>
          <View style={styles.contentSection}>
            <Text style={styles.contentSectionTitle}>Skills</Text>
            <View style={[styles.contentSectionList, styles.skills]}>
              {skills.map((section) => (
                <View key={section.title} style={styles.contentSubSection}>
                  <Text style={styles.contentSubSectionTitle}>
                    {section.title} :
                  </Text>
                  <View style={styles.contentSubSectionList}>
                    {section.items.map((i, index) => (
                      <Text
                        key={i.name}
                        style={[styles.listItem, styles.skillsListItem]}
                      >
                        {i.name}
                        {index < section.items.length - 1 && ","}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.contentHorizontal}>
            <View style={styles.contentLeft}>
              <View style={styles.contentSection}>
                <Text style={styles.contentSectionTitle}>Experiences</Text>
                <View style={styles.contentSectionList}>
                  {filteredExperience.map(
                    ({ company, date, position, location, description }) => (
                      <View key={company} style={styles.listItem}>
                        <Text style={styles.listItemTitle}>
                          {position} - {company} |{" "}
                          <Text style={styles.listItemDateLocation}>
                            {date} ({location})
                          </Text>
                        </Text>
                        <View style={styles.listItemDescription}>
                          <Text style={styles.descriptionTitle}>
                            {description.title}
                          </Text>
                          <View style={styles.descriptionList}>
                            {description.list.map((i) => (
                              <Text key={i} style={styles.descriptionListItem}>
                                • {i}
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
                      <View
                        key={establishment + degree}
                        style={styles.listItem}
                      >
                        <Text style={styles.listItemTitle}>{degree}</Text>
                        <Text style={styles.listItemFieldTitle}>
                          {fieldTitle}
                        </Text>
                        <Text style={styles.listItemPlace}>
                          {establishment}
                        </Text>
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
                <Text style={styles.contentSectionTitle}>
                  Training / Courses
                </Text>
                <View style={styles.contentSectionList}>
                  {courses.map(
                    ({
                      date,
                      degree,
                      description,
                      establishment,
                      location,
                    }) => (
                      <View key={establishment} style={styles.listItem}>
                        {!!degree && (
                          <Text style={styles.listItemTitle}>{degree}</Text>
                        )}
                        {establishment && (
                          <Text style={styles.listItemPlace}>
                            {establishment}
                          </Text>
                        )}
                        {!!date && (
                          <View style={styles.listItemDateLocation}>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.location}>({location})</Text>
                          </View>
                        )}
                        <View style={styles.listItemDescription}>
                          <Text style={styles.descriptionTitle}>
                            {description.title}
                          </Text>
                          {description.list.length > 0 && (
                            <View style={styles.descriptionList}>
                              {description.list.map((i) => (
                                <Text
                                  key={i}
                                  style={styles.descriptionListItem}
                                >
                                  • {i}
                                </Text>
                              ))}
                            </View>
                          )}
                        </View>
                      </View>
                    )
                  )}
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
        </View>
      </Page>
    </Document>
  );
};
