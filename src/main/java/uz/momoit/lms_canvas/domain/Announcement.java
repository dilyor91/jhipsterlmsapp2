package uz.momoit.lms_canvas.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Announcement.
 */
@Entity
@Table(name = "announcement")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Announcement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "attachment_id")
    private Long attachmentId;

    @Column(name = "delay_post")
    private Boolean delayPost;

    @Column(name = "post_at")
    private Instant postAt;

    @Column(name = "published")
    private Boolean published;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_announcement__announcement",
        joinColumns = @JoinColumn(name = "announcement_id"),
        inverseJoinColumns = @JoinColumn(name = "announcement_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "course", "courseSections" }, allowSetters = true)
    private Set<CourseSection> announcements = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Announcement id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public Announcement title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return this.content;
    }

    public Announcement content(String content) {
        this.setContent(content);
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getAttachmentId() {
        return this.attachmentId;
    }

    public Announcement attachmentId(Long attachmentId) {
        this.setAttachmentId(attachmentId);
        return this;
    }

    public void setAttachmentId(Long attachmentId) {
        this.attachmentId = attachmentId;
    }

    public Boolean getDelayPost() {
        return this.delayPost;
    }

    public Announcement delayPost(Boolean delayPost) {
        this.setDelayPost(delayPost);
        return this;
    }

    public void setDelayPost(Boolean delayPost) {
        this.delayPost = delayPost;
    }

    public Instant getPostAt() {
        return this.postAt;
    }

    public Announcement postAt(Instant postAt) {
        this.setPostAt(postAt);
        return this;
    }

    public void setPostAt(Instant postAt) {
        this.postAt = postAt;
    }

    public Boolean getPublished() {
        return this.published;
    }

    public Announcement published(Boolean published) {
        this.setPublished(published);
        return this;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Set<CourseSection> getAnnouncements() {
        return this.announcements;
    }

    public void setAnnouncements(Set<CourseSection> courseSections) {
        this.announcements = courseSections;
    }

    public Announcement announcements(Set<CourseSection> courseSections) {
        this.setAnnouncements(courseSections);
        return this;
    }

    public Announcement addAnnouncement(CourseSection courseSection) {
        this.announcements.add(courseSection);
        return this;
    }

    public Announcement removeAnnouncement(CourseSection courseSection) {
        this.announcements.remove(courseSection);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Announcement)) {
            return false;
        }
        return getId() != null && getId().equals(((Announcement) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Announcement{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", content='" + getContent() + "'" +
            ", attachmentId=" + getAttachmentId() +
            ", delayPost='" + getDelayPost() + "'" +
            ", postAt='" + getPostAt() + "'" +
            ", published='" + getPublished() + "'" +
            "}";
    }
}
