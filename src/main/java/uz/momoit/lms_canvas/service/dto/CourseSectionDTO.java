package uz.momoit.lms_canvas.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the {@link uz.momoit.lms_canvas.domain.CourseSection} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class CourseSectionDTO implements Serializable {

    private Long id;

    @NotNull
    private String sectionName;

    private CourseDTO course;

    private Set<AnnouncementDTO> courseSections = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName;
    }

    public CourseDTO getCourse() {
        return course;
    }

    public void setCourse(CourseDTO course) {
        this.course = course;
    }

    public Set<AnnouncementDTO> getCourseSections() {
        return courseSections;
    }

    public void setCourseSections(Set<AnnouncementDTO> courseSections) {
        this.courseSections = courseSections;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CourseSectionDTO)) {
            return false;
        }

        CourseSectionDTO courseSectionDTO = (CourseSectionDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, courseSectionDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CourseSectionDTO{" +
            "id=" + getId() +
            ", sectionName='" + getSectionName() + "'" +
            ", course=" + getCourse() +
            ", courseSections=" + getCourseSections() +
            "}";
    }
}
