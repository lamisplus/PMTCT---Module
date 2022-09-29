package org.lamisplus.modules.pmtct.domain.entity;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.lamisplus.modules.pmtct.domain.entity.enums.ReferredSyphilisPositiveClient;
import org.lamisplus.modules.pmtct.domain.entity.enums.TestedForSyphilis;
import org.lamisplus.modules.pmtct.domain.entity.enums.TreatedForSyphilis;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "pmtct_anc")
@Data
@NoArgsConstructor
public class ANC extends PMTCTTransactionalEntity {
    private LocalDate LMP;
    private Integer gAWeeks;
    private Integer gravida;
    private Integer parity;
    private String sourceOfReferral;
    @Enumerated(EnumType.STRING)
    private TestedForSyphilis testedForSyphilis;
    @Enumerated(EnumType.STRING)
    private TreatedForSyphilis treatedForSyphilis;
    @Enumerated(EnumType.STRING)
    private ReferredSyphilisPositiveClient referredSyphilisPositiveClient;
    private String syphilisTestResult;
    private Long archived;


}
