package org.lamisplus.modules.pmtct.service;

import lombok.AllArgsConstructor;
import org.lamisplus.modules.pmtct.domain.dto.ActivityTracker;
import org.lamisplus.modules.pmtct.domain.entity.*;
import org.lamisplus.modules.pmtct.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ANCAcivityTracker {
    private final ANCRepository ancRepository;
    private final DeliveryRepository deliveryRepository;
    private final PmtctVisitRepository pmtctVisitRepository;
    private final PMTCTEnrollmentReporsitory pmtctEnrollmentReporsitory;

    private  final InfantArvRepository infantArvRepository;

    private  final InfantVisitRepository infantVisitRepository;

    private LocalDate getDeliveryDate (String ancNo)
    {
        LocalDate deliveryDate = LocalDate.now();
        Delivery delivery = new Delivery();
        try{
            delivery = this.deliveryRepository.getDeliveryByAncNo(ancNo);
            deliveryDate = delivery.getDateOfDelivery();
        }catch (Exception e){}

        return deliveryDate;
    }

    public List<ActivityTracker> getANCActivities(String ancNo)
    {
        ArrayList<ActivityTracker> activityTrackers = new ArrayList<>();

        LocalDate deliveryDate = this.getDeliveryDate(ancNo);
        List<PmtctVisit> pmtctVisits1 = this.pmtctVisitRepository.getPNCVisits(ancNo, deliveryDate);
        if (!(pmtctVisits1.isEmpty()))
        {
            ActivityTracker activityTracker = new ActivityTracker();
            pmtctVisits1.forEach(pmtctVisit ->{
                activityTracker.setActivityName("PNC Visit");
                activityTracker.setPath("anc-mother-visit");
                activityTracker.setEditable(true);
                activityTracker.setDeletable(true);
                activityTracker.setViewable(true);
                activityTracker.setRecordId(pmtctVisit.getId());
                activityTracker.setActivityDate(pmtctVisit.getDateOfVisit());
                activityTrackers.add(activityTracker);
            } );

        }

        Optional<Delivery> deliveries = this.deliveryRepository.findDeliveryByAncNo(ancNo);
        if (deliveries.isPresent())
        {
            ActivityTracker activityTracker = new ActivityTracker();
            activityTracker.setActivityName("Labour and Delivery");
            activityTracker.setPath("anc-delivery");
            activityTracker.setEditable(true);
            activityTracker.setDeletable(true);
            activityTracker.setViewable(true);
            activityTracker.setRecordId(deliveries.get().getId());
            activityTracker.setActivityDate(deliveries.get().getDateOfDelivery());
            activityTrackers.add(activityTracker);
        }

        List<PmtctVisit> pmtctVisits = this.pmtctVisitRepository.getANCVisits(ancNo, deliveryDate);
        if (!(pmtctVisits.isEmpty()))
        {
            ActivityTracker activityTracker = new ActivityTracker();
            pmtctVisits.forEach(pmtctVisit ->{
                activityTracker.setActivityName("ANC Visit");
                activityTracker.setPath("anc-mother-visit");
                activityTracker.setEditable(true);
                activityTracker.setDeletable(true);
                activityTracker.setViewable(true);
                activityTracker.setRecordId(pmtctVisit.getId());
                activityTracker.setActivityDate(pmtctVisit.getDateOfVisit());
                activityTrackers.add(activityTracker);
            } );
        }
        Optional<PMTCTEnrollment> pmtctEnrollments = this.pmtctEnrollmentReporsitory.getByAncNo(ancNo);
        if (pmtctEnrollments.isPresent())
        {
            ActivityTracker activityTracker = new ActivityTracker();
            activityTracker.setActivityName("PMTCT Enrollment");
            activityTracker.setPath("pmtct-enrollment");
            activityTracker.setEditable(true);
            activityTracker.setDeletable(true);
            activityTracker.setViewable(true);
            activityTracker.setRecordId(pmtctEnrollments.get().getId());
            activityTracker.setActivityDate(pmtctEnrollments.get().getPmtctEnrollmentDate());
            activityTrackers.add(activityTracker);
        }

        Optional<ANC> ancs = this.ancRepository.getByAncNo(ancNo);
        if (ancs.isPresent())
        {
            ActivityTracker activityTracker = new ActivityTracker();
            activityTracker.setActivityName("ANC Enrollment");
            activityTracker.setPath("anc-enrollment");
            activityTracker.setEditable(true);
            activityTracker.setDeletable(true);
            activityTracker.setViewable(true);
            activityTracker.setActivityDate(ancs.get().getFirstAncDate());
            activityTracker.setRecordId(ancs.get().getId());
            activityTrackers.add(activityTracker);
        }

        return activityTrackers;

    }

//    private LocalDate getInfantArvDate (String hospitalNumber)
//    {
//        LocalDate infantArvDate  = LocalDate.now();
//        try{
//            Optional<InfantArv> infantArvs = this.infantArvRepository.getByInfantHospitalNumber(hospitalNumber);//.infantArvRepository
//            if(infantArvs.isPresent()) {
//                InfantArv infantArv = new InfantArv();
//                infantArvDate = infantArv.getVisitDate();
//            }
//        }catch (Exception e){}
//
//        return infantArvDate;
//    }

    public List<ActivityTracker> getInfanctVisitActivities(String hospitalNumber)
    {
        ArrayList<ActivityTracker> activityTrackers = new ArrayList<>();
        Optional<InfantArv> infantArvs = this.infantArvRepository.getByInfantHospitalNumber(hospitalNumber);
        if (infantArvs.isPresent())
        {
            ActivityTracker activityTracker = new ActivityTracker();
            activityTracker.setActivityName("ARV and CTX Administration");
            activityTracker.setPath("apmtct_infant_arv");
            activityTracker.setEditable(true);
            activityTracker.setDeletable(true);
            activityTracker.setViewable(true);
            activityTracker.setRecordId(infantArvs.get().getId());
            activityTracker.setActivityDate(infantArvs.get().getVisitDate());
            activityTrackers.add(activityTracker);
        }

        ///LocalDate arvDate = this.getInfantArvDate(hospitalNumber);
        List<InfantVisit> infantVisitList = this.infantVisitRepository.getPreArvVisits(hospitalNumber);
        if (!(infantVisitList.isEmpty()))
        {
            ActivityTracker activityTracker = new ActivityTracker();
            infantVisitList.forEach(pmtctVisit ->{
                activityTracker.setActivityName("Infant Post-ARV Visit");
                activityTracker.setPath("pmtct_infant_visit");
                activityTracker.setEditable(true);
                activityTracker.setDeletable(true);
                activityTracker.setViewable(true);
                activityTracker.setRecordId(pmtctVisit.getId());
                activityTracker.setActivityDate(pmtctVisit.getVisitDate());
                activityTrackers.add(activityTracker);
            } );

        }





        return activityTrackers;

    }

}
