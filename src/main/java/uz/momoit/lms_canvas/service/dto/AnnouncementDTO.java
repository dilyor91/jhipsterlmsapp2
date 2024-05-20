package uz.momoit.lms_canvas.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the {@link uz.momoit.lms_canvas.domain.Announcement} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class AnnouncementDTO implements Serializable {

    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String content;

    private Long attachmentId;

    private Boolean delayPost;

    private Instant postAt;

    private Boolean published;

    private Set<CourseSectionDTO> announcements = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(Long attachmentId) {
        this.attachmentId = attachmentId;
    }

    public Boolean getDelayPost() {
        return delayPost;
    }

    public void setDelayPost(Boolean delayPost) {
        this.delayPost = delayPost;
    }

    public Instant getPostAt() {
        return postAt;
    }

    public void setPostAt(Instant postAt) {
        this.postAt = postAt;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Set<CourseSectionDTO> getAnnouncements() {
        return announcements;
    }

    public void setAnnouncements(Set<CourseSectionDTO> announcements) {
        this.announcements = announcements;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AnnouncementDTO)) {
            return false;
        }

        AnnouncementDTO announcementDTO = (AnnouncementDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, announcementDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "AnnouncementDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", content='" + getContent() + "'" +
            ", attachmentId=" + getAttachmentId() +
            ", delayPost='" + getDelayPost() + "'" +
            ", postAt='" + getPostAt() + "'" +
            ", published='" + getPublished() + "'" +
            ", announcements=" + getAnnouncements() +
            "}";
    }
}
