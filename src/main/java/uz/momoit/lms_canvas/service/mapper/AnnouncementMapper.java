package uz.momoit.lms_canvas.service.mapper;

import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;
import uz.momoit.lms_canvas.domain.Announcement;
import uz.momoit.lms_canvas.domain.CourseSection;
import uz.momoit.lms_canvas.service.dto.AnnouncementDTO;
import uz.momoit.lms_canvas.service.dto.CourseSectionDTO;

/**
 * Mapper for the entity {@link Announcement} and its DTO {@link AnnouncementDTO}.
 */
@Mapper(componentModel = "spring")
public interface AnnouncementMapper extends EntityMapper<AnnouncementDTO, Announcement> {
    @Mapping(target = "announcements", source = "announcements", qualifiedByName = "courseSectionIdSet")
    AnnouncementDTO toDto(Announcement s);

    @Mapping(target = "removeAnnouncement", ignore = true)
    Announcement toEntity(AnnouncementDTO announcementDTO);

    @Named("courseSectionId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseSectionDTO toDtoCourseSectionId(CourseSection courseSection);

    @Named("courseSectionIdSet")
    default Set<CourseSectionDTO> toDtoCourseSectionIdSet(Set<CourseSection> courseSection) {
        return courseSection.stream().map(this::toDtoCourseSectionId).collect(Collectors.toSet());
    }
}
