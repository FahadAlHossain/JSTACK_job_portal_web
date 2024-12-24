document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search);
  const index = urlParam.get("id");
  const selectJob = jCategory[index];

  const jobDetailsContainer = document.getElementById("job-details");
  jobDetailsContainer.innerHTML = `
    <div class="job-header">
        <div class="job-img-row">
          <img src="${selectJob.image}" alt="" />
          <div>
            <h2>${selectJob.companyName}</h2>
            <span>${selectJob.location}</span>
          </div>
        </div>
        <a href="#" id="g-btn">Apply Now</a>
      </div>
      <div class="features obj-width">
        <div class="fe-box">
          <div>
            <img src="../images/vacancy.png" alt="" />
            <h3>Vacancy</h3>
            <p>${selectJob.vacancy}</p>
          </div>
          <div>
            <img src="../images/fe 1.png" alt="" />
            <h3>Position</h3>
            <p>${selectJob.type}</p>
          </div>
          <div>
            <img src="../images/hour.png" alt="" />
            <h3>Hours</h3>
            <p>${selectJob.hours}</p>
          </div>
          <div>
            <img src="../images/salary.png" alt="" />
            <h3>Salary</h3>
            <p>${selectJob.salary}</p>
          </div>
        </div>
    </div>
    <div class="job-description sec-space">
        <h3>Description</h3>
        <p>${selectJob.description}</p>
        <h3>Employment Status</h3>
        <p>- ${selectJob.type}</p>
        <h3>Workplace</h3>
        <p>- ${selectJob.workplace}</p>
        <h3>Educational Requirements</h3>
        <p>- ${selectJob.education}</p>
        <h3>Experience Requirements</h3>
        <p>- 2 to 3 year(s)</p>
    </div>`;
});
