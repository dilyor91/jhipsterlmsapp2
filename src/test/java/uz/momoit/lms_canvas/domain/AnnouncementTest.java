package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static uz.momoit.lms_canvas.domain.AnnouncementTestSamples.*;
import static uz.momoit.lms_canvas.domain.CourseSectionTestSamples.*;

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;
import uz.momoit.lms_canvas.web.rest.TestUtil;

class AnnouncementTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Announcement.class);
        Announcement announcement1 = getAnnouncementSample1();
        Announcement announcement2 = new Announcement();
        assertThat(announcement1).isNotEqualTo(announcement2);

        announcement2.setId(announcement1.getId());
        assertThat(announcement1).isEqualTo(announcement2);

        announcement2 = getAnnouncementSample2();
        assertThat(announcement1).isNotEqualTo(announcement2);
    }

    @Test
    void announcementTest() throws Exception {
        Announcement announcement = getAnnouncementRandomSampleGenerator();
        CourseSection courseSectionBack = getCourseSectionRandomSampleGenerator();

        announcement.addAnnouncement(courseSectionBack);
        assertThat(announcement.getAnnouncements()).containsOnly(courseSectionBack);

        announcement.removeAnnouncement(courseSectionBack);
        assertThat(announcement.getAnnouncements()).doesNotContain(courseSectionBack);

        announcement.announcements(new HashSet<>(Set.of(courseSectionBack)));
        assertThat(announcement.getAnnouncements()).containsOnly(courseSectionBack);

        announcement.setAnnouncements(new HashSet<>());
        assertThat(announcement.getAnnouncements()).doesNotContain(courseSectionBack);
    }
}
