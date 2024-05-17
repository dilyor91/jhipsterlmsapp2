package uz.momoit.lms_canvas.repository;

import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import uz.momoit.lms_canvas.domain.Enrollment;

/**
 * Spring Data JPA repository for the Enrollment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    @Query("select enrollment from Enrollment enrollment where enrollment.user.login = ?#{authentication.name}")
    List<Enrollment> findByUserIsCurrentUser();
}
