const Dashboard = () => {
    return (
        <div>
            <h3>Módulo de administración</h3>
            <p>Bienvenido al módulo de administración. Seleccione una opción para revisar.</p>
            <div class="card overflow-hidden mt-3">
            <div class="card-header p-0 bg-light scrollbar-overlay">
              <ul class="nav nav-tabs border-0 tab-tickets-status flex-nowrap" id="in-depth-chart-tab" role="tablist">
                <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1 active" id="tickets-created-tab" data-bs-toggle="tab" href="#tickets-created" role="tab" aria-controls="tickets-created" aria-selected="true"><span class="fas fa-ticket-alt icon text-600"></span>
                    <h6 class="mb-0 text-600">Tickets Created<span> (25)</span></h6>
                  </a></li>
                <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1" id="tickets-resolved-tab" data-bs-toggle="tab" href="#tickets-resolved" role="tab" aria-controls="tickets-resolved" aria-selected="false"><span class="fas fa-check icon text-600"></span>
                    <h6 class="mb-0 text-600">Tickets Resolved</h6>
                  </a></li>
                <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1" id="tickets-reopened-tab" data-bs-toggle="tab" href="#tickets-reopened" role="tab" aria-controls="tickets-reopened" aria-selected="false"><span class="fas fa-envelope-open-text icon text-600"></span>
                    <h6 class="mb-0 text-600">Tickets Reopened</h6>
                  </a></li>
                <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1" id="tickets-unsolved-tab" data-bs-toggle="tab" href="#tickets-unsolved" role="tab" aria-controls="tickets-unsolved" aria-selected="false"><span class="fas fa-exclamation-triangle icon text-600"></span>
                    <h6 class="mb-0 text-600">Tickets Unsolved</h6>
                  </a></li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="tab-content">
                <div class="tab-pane active" id="tickets-created" role="tabpanel" aria-labelledby="tickets-created-tab">
                  <div class="row mx-0 border-bottom border-dashed">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets created Split by Source</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Email</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">33</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Phone</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">60</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Website</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">70</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Chat</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">87</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets created Split by Priority</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Urgent</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">87</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Medium</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">70</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">High</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">60</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Low</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">33</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mx-0">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets created Split by Status</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Open</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">20</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets created Split by Category</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Question</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tickets-resolved" role="tabpanel" aria-labelledby="tickets-resolved-tab">
                  <div class="row mx-0 border-bottom border-dashed">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets resolved Split by Source</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Email</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">70</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Phone</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">50</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Website</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">30</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Chat</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">95</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets resolved Split by Priority</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Urgent</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">70</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Medium</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">60</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">High</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">70</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Low</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mx-0">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets resolved Split by Status</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Open</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">30</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets resolved Split by Category</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Question</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tickets-reopened" role="tabpanel" aria-labelledby="tickets-reopened-tab">
                  <div class="row mx-0 border-bottom border-dashed">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets reopened Split by Source</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Email</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">40</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Phone</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">40</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Website</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">50</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Chat</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">20</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets reopened Split by Priority</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Urgent</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">90</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Medium</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">50</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">High</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">80</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Low</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mx-0">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets reopened Split by Status</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Open</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">40</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets reopened Split by Category</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Question</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tickets-unsolved" role="tabpanel" aria-labelledby="tickets-unsolved-tab">
                  <div class="row mx-0 border-bottom border-dashed">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets unsolved Split by Source</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Email</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">50</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Phone</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">20</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Website</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">75</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Chat</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">30</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets unsolved Split by Priority</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Urgent</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">85</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Medium</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">40</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">High</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">90</p>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Low</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mx-0">
                    <div class="col-md-6 p-x1 border-md-end border-bottom border-md-bottom-0 border-dashed">
                      <h6 class="fs--1 mb-3">Tickets unsolved Split by Status</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Open</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">50</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 p-x1">
                      <h6 class="fs--1 mb-3">Tickets unsolved Split by Category</h6>
                      <div class="row mt-2">
                        <div class="col-3 col-sm-2 col-md-3 col-lg-2">
                          <p class="mb-0 fs--1 fw-semi-bold text-600 text-nowrap">Question</p>
                        </div>
                        <div class="col-9 col-sm-10 col-md-9 col-lg-10 d-flex align-items-center">
                          <div class="progress bg-200 w-100 rounded-pill" >
                            <div class="progress-bar rounded-pill animated-progress-bar" role="progressbar" aria-label="Basic example"  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mb-0 fs--1 ps-3 fw-semi-bold text-600">15</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light py-2">
              <div class="row flex-between-center">
                <div class="col-auto"><select class="form-select form-select-sm">
                    <option>Last 7 days</option>
                    <option>Last Month</option>
                    <option>Last Year</option>
                  </select></div>
                <div class="col-auto"><a class="btn btn-link btn-sm px-0 fw-medium" href="#!">View all<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <div class="card-header d-flex justify-content-between align-items-center border-bottom py-2">
              <h6 class="mb-0">Distribution of Performance</h6>
              <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-distribution-of-performance" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-distribution-of-performance"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
            <div class="card-body scrollbar">
              <div class="echart-distribution-of-performance" data-echart-responsive="true"></div>
            </div>
            <div class="card-footer bg-light py-2">
              <div class="row flex-between-center">
                <div class="col-auto"><select class="form-select form-select-sm">
                    <option>January</option>
                    <option>February</option>
                    <option selected="selected">March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>Novenber</option>
                    <option>December</option>
                  </select></div>
                <div class="col-auto"><a class="btn btn-sm btn-falcon-default" href="#!">View All</a></div>
              </div>
            </div>
          </div>
          <div class="card mt-3" id="surveyResultTable" data-list='{"valueNames":["name","satisfied","dissatisfied"],"page":5,"pagination":true}'>
            <div class="card-header border-bottom border-200">
              <div class="row flex-between-center gy-2">
                <div class="col-auto">
                  <h6 class="mb-0">Agent Survey Result</h6>
                </div>
                <div class="col-auto">
                  <div class="d-none" id="table-survey-result-actions">
                    <div class="d-flex"><select class="form-select form-select-sm" aria-label="Bulk actions">
                        <option selected="">Bulk actions</option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select><button class="btn btn-falcon-default btn-sm ms-2" type="button">Apply</button></div>
                  </div><select class="form-select form-select-sm" id="table-survey-result-replace-element">
                    <option selected="selected">Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive scrollbar">
                <table class="table table-sm fs--1 mb-0">
                  <thead class="bg-light text-800">
                    <tr>
                      <th class="py-2 fs-0">
                        <div class="form-check d-flex align-items-center"><input class="form-check-input" id="checkbox-bulk-tickets-select" type="checkbox" data-bulk-select='{"body":"table-survey-result-body","actions":"table-survey-result-actions","replacedElement":"table-survey-result-replace-element"}' /></div>
                      </th>
                      <th class="sort align-middle" data-sort="name" >Agent Name</th>
                      <th class="sort align-middle" data-sort="satisfied" >Extremely Satisfied</th>
                      <th class="sort align-middle" data-sort="dissatisfied">Extremely Dissatisfied</th>
                    </tr>
                  </thead>
                  <tbody class="list" id="table-survey-result-body">
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-0" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-success bg-soft-success fs-0"><span>A</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Amelia</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">36</h5>
                              <h6 class="mb-0 fw-semi-bold text-primary"><span class="fs--2 me-1 ms-2 fas fa-caret-up"></span><span class="fs--1">17</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 19</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">52</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-danger"><span class="me-1 ms-2 fs--2 fas fa-caret-up"></span><span class="fs--1">33</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 19</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-1" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-primary bg-soft-primary fs-0"><span>B</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Bentley</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">41</h5>
                              <h6 class="mb-0 fw-semi-bold text-primary"><span class="fs--2 me-1 ms-2 fas fa-caret-up"></span><span class="fs--1">17</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 24</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">23</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">1</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 24</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-2" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-info bg-soft-info fs-0"><span>A</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Abigail</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">52</h5>
                              <h6 class="mb-0 fw-semi-bold text-primary"><span class="fs--2 me-1 ms-2 fas fa-caret-up"></span><span class="fs--1">27</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 25</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">12</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">13</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 25</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-3" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-warning bg-soft-warning fs-0"><span>C</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Christopher</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">14</h5>
                              <h6 class="mb-0 fw-semi-bold text-danger"><span class="fs--2 me-1 ms-2 fas fa-caret-down"></span><span class="fs--1">16</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 30</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">25</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">13</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 38</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-4" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <img class="rounded-circle" src="../../assets/img/team/2-thumb.png" alt="" />
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Declan</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">15</h5>
                              <h6 class="mb-0 fw-semi-bold text-danger"><span class="fs--2 me-1 ms-2 fas fa-caret-down"></span><span class="fs--1">30</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 45</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">32</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">7</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 39</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0">
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-5" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-primary bg-soft-primary fs-0"><span>B</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Bentley</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">41</h5>
                              <h6 class="mb-0 fw-semi-bold text-primary"><span class="fs--2 me-1 ms-2 fas fa-caret-up"></span><span class="fs--1">17</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 24</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">23</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">1</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 24</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0" >
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-6" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-info bg-soft-info fs-0"><span>A</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Abigail</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">52</h5>
                              <h6 class="mb-0 fw-semi-bold text-primary"><span class="fs--2 me-1 ms-2 fas fa-caret-up"></span><span class="fs--1">27</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 25</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">12</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">13</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 25</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0" >
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-7" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-warning bg-soft-warning fs-0"><span>C</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Christopher</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">14</h5>
                              <h6 class="mb-0 fw-semi-bold text-danger"><span class="fs--2 me-1 ms-2 fas fa-caret-down"></span><span class="fs--1">16</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 30</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">25</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">13</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 38</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0" >
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-8" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <img class="rounded-circle" src="../../assets/img/team/2-thumb.png" alt="" />
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Declan</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">15</h5>
                              <h6 class="mb-0 fw-semi-bold text-danger"><span class="fs--2 me-1 ms-2 fas fa-caret-down"></span><span class="fs--1">30</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 45</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">32</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">7</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 39</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle py-4 fs-0" >
                        <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="agent-survey-result-9" data-bulk-select-row="data-bulk-select-row" /></div>
                      </td>
                      <td class="align-middle name white-space-nowrap pe-4 w-lg-25">
                        <div class="d-flex align-items-center gap-2 position-relative">
                          <div class="avatar avatar-xl">
                            <div class="avatar-name rounded-circle text-success bg-soft-success fs-0"><span>A</span></div>
                          </div>
                          <h6 class="mb-0"><a class="stretched-link text-800" href="#!">Amelia</a></h6>
                        </div>
                      </td>
                      <td class="align-middle satisfied white-space-nowrap pe-5 pe-xxl-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">36</h5>
                              <h6 class="mb-0 fw-semi-bold text-danger"><span class="fs--2 me-1 ms-2 fas fa-caret-down"></span><span class="fs--1">17</span></h6>
                            </div>
                            <h6 class="mb-0 text-700">Last Day 19</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle dissatisfied">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="d-flex align-items-baseline gap-1 mb-1">
                              <h5 class="mb-0">52</h5>
                              <h6 class="mb-0 fs--2 fw-semi-bold text-primary"><span class="me-1 ms-2 fs--2 fas fa-caret-down"></span><span class="fs--1">33</span></h6>
                            </div>
                            <h6 class="mb-0 text-700 text-nowrap">Last Day 19</h6>
                          </div>
                          <div class="ms-4">
                            <div class="progress rounded-pill mb-1" >
                              <div class="progress-bar rounded-pill bg-primary" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress rounded-pill" >
                              <div class="progress-bar rounded-pill bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-center"><button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
              <ul class="pagination mb-0"></ul><button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
            </div>
          </div>
          <div class="card mt-3">
            <div class="card-header d-flex justify-content-between align-items-center bg-light py-2">
              <h6 class="mb-0">Customer Satisfaction Survey</h6>
              <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-satisfaction-survey" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-satisfaction-survey"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
            <div class="card-body scrollbar">
              <div class="echart-satisfaction-survey" data-echart-responsive="true"></div>
            </div>
            <div class="card-footer bg-light py-2 text-center"><a class="btn btn-link btn-sm fw-medium" href="#!">View all<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
          </div>
          <div class="card mt-3">
            <div class="card-header d-flex justify-content-between align-items-center bg-light py-2">
              <h6 class="mb-0">Analysis of the Top Customers</h6>
              <div class="dropdown font-sans-serif btn-reveal-trigger"><button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-top-customers" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-top-customers"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                </div>
              </div>
            </div>
            <div class="card-body ps-0 py-0 d-flex">
              <ul class="nav nav-tabs tab-active-caret top-customers-tab border-0 border-end d-inline-block text-center" id="top-customers-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0 active" id="monday-tab" data-bs-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-selected="true">MON</a></li>
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0" id="tuesday-tab" data-bs-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday" aria-selected="false">TUE</a></li>
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0" id="wednesday-tab" data-bs-toggle="tab" href="#wednesday" role="tab" aria-controls="wednesday" aria-selected="false">WED</a></li>
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0" id="thursday-tab" data-bs-toggle="tab" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false">THU</a></li>
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0" id="friday-tab" data-bs-toggle="tab" href="#friday" role="tab" aria-controls="friday" aria-selected="false">FRI</a></li>
                <li class="nav-item border-bottom" role="presentation"><a class="nav-link p-x1 mb-0" id="saturday-tab" data-bs-toggle="tab" href="#saturday" role="tab" aria-controls="saturday" aria-selected="false">SAT</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link p-x1 mb-0" id="sunday-tab" data-bs-toggle="tab" href="#sunday" role="tab" aria-controls="sunday" aria-selected="false">SUN</a></li>
              </ul>
              <div class="tab-content w-100 ps-x1 pt-x1">
                <div class="tab-pane active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">65.09%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>13.6%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">78.35%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>8.3%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">45.45%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>5.12%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">12.19%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>2.03%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">80.09%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>11.6%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="saturday" role="tabpanel" aria-labelledby="saturday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">55.05%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>5.55%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
                <div class="tab-pane" id="sunday" role="tabpanel" aria-labelledby="sunday-tab">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <h4 class="text-primary">65.09%</h4>
                    <h6 class="fs--2 py-1 px-2 fw-semi-bold badge badge-soft-primary rounded-pill"><span class="fas fa-caret-up me-1"></span><span>13.6%</span></h6>
                  </div>
                  <div class="echart-top-customers" data-echart-responsive="true"></div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light py-2">
              <div class="row flex-between-center">
                <div class="col-auto pe-0"><select class="form-select form-select-sm">
                    <option>Last 7 days</option>
                    <option>Last Month</option>
                    <option>Last Year</option>
                  </select></div>
                <div class="col-auto"><a class="btn btn-link btn-sm px-0 fw-medium" href="#!">View all reports<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Dashboard;

/*
const Dashboard = () => {
  /*var ctx = document.getElementById("myChart");

var myChart = new myChart(ctx, {
  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        lineTension: 0,
        backgroundColor: "transparent",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
return (
  <>
<main style="margin-top: 58px">
    <div class="container pt-4">
      <section class="mb-4">
        <div class="card">
          <div class="card-header py-3">
            <h5 class="mb-0 text-center"><strong>Sales</strong></h5>
          </div>
          <div class="card-body">
            <canvas class="my-4 w-100" id="myChart" height="380"></canvas>
          </div>
        </div>
      </section>



      <section class="mb-4">
        <div class="card">
          <div class="card-header text-center py-3">
            <h5 class="mb-0 text-center">
              <strong>Sales Performance KPIs</strong>
            </h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Product Detail Views</th>
                    <th scope="col">Unique Purchases</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Revenue</th>
                    <th scope="col">Avg. Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Value</th>
                    <td>18,492</td>
                    <td>228</td>
                    <td>350</td>
                    <td>$4,787.64</td>
                    <td>$13.68</td>
                  </tr>
                  <tr>
                    <th scope="row">Percentage change</th>
                    <td><span class="text-danger"><i class="fas fa-caret-down me-1"></i><span>-48.8%%</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>14.0%</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>46.4%</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>29.6%</span></span>
                    </td>
                    <td><span class="text-danger"><i class="fas fa-caret-down me-1"></i><span>-11.5%</span></span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Absolute change</th>
                    <td><span class="text-danger"><i class="fas fa-caret-down me-1"></i><span>-17,654</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>28</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>111</span></span>
                    </td>
                    <td><span class="text-success"><i class="fas fa-caret-up me-1"></i><span>$1,092.72</span></span>
                    </td>
                    <td><span class="text-danger"><i class="fas fa-caret-down me-1"></i><span>$-1.78</span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-pencil-alt text-info fa-3x"></i>
                  </div>
                  <div class="text-end">
                    <h3>278</h3>
                    <p class="mb-0">New Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="far fa-comment-alt text-warning fa-3x"></i>
                  </div>
                  <div class="text-end">
                    <h3>156</h3>
                    <p class="mb-0">New Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-chart-line text-success fa-3x"></i>
                  </div>
                  <div class="text-end">
                    <h3>64.89 %</h3>
                    <p class="mb-0">Bounce Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fas fa-map-marker-alt text-danger fa-3x"></i>
                  </div>
                  <div class="text-end">
                    <h3>423</h3>
                    <p class="mb-0">Total Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-danger">278</h3>
                    <p class="mb-0">New Projects</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-rocket text-danger fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-success">156</h3>
                    <p class="mb-0">New Clients</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-user text-success fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-warning">64.89 %</h3>
                    <p class="mb-0">Conversion Rate</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-chart-pie text-warning fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-info">423</h3>
                    <p class="mb-0">Support Tickets</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-life-ring text-info fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-info">278</h3>
                    <p class="mb-0">New Posts</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-book-open text-info fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div class="progress-bar bg-info"role="progressbar"style="width: 80%"aria-valuenow="80"aria-valuemin="0"aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-warning">156</h3>
                    <p class="mb-0">New Comments</p>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-comments text-warning fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div class="progress-bar bg-warning"role="progressbar"style="width: 35%"aria-valuenow="35"aria-valuemin="0"aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-success">64.89 %</h3>
                    <p class="mb-0">Bounce Rate</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-mug-hot text-success fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div class="progress-bar bg-success"role="progressbar"style="width: 60%"aria-valuenow="60"aria-valuemin="0"aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 class="text-danger">423</h3>
                    <p class="mb-0">Total Visits</p>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-map-signs text-danger fa-3x"></i>
                  </div>
                </div>
                <div class="px-md-1">
                  <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                    <div class="progress-bar bg-danger"role="progressbar"style="width: 40%"aria-valuenow="40"aria-valuemin="0"aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div class="row">
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center"><i class="fas fa-pencil-alt text-info fa-3x me-4"></i>
                    </div>
                    <div><h4>Total Posts</h4><p class="mb-0">Monthly blog posts</p>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <h2 class="h1 mb-0">18,000</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center"><i class="far fa-comment-alt text-warning fa-3x me-4"></i>
                    </div>
                    <div><h4>Total Comments</h4><p class="mb-0">Monthly blog posts</p>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <h2 class="h1 mb-0">84,695</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center"><h2 class="h1 mb-0 me-4">$76,456.00</h2>
                    </div>
                    <div><h4>Total Sales</h4><p class="mb-0">Monthly Sales Amount</p>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <i class="far fa-heart text-danger fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                  <div class="d-flex flex-row">
                    <div class="align-self-center"><h2 class="h1 mb-0 me-4">$36,000.00</h2>
                    </div>
                    <div><h4>Total Cost</h4><p class="mb-0">Monthly Cost</p>
                    </div>
                  </div>
                  <div class="align-self-center">
                    <i class="fas fa-wallet text-success fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>
  </>
)
}

export default Dashboard;*/