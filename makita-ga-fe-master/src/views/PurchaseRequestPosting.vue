<script setup>
import { ref } from 'vue'

const seeItem = ref(false)
const requestPosting = ref(null)
const items = ref([])

const data = [
  {
    prq_no: 'JKT/PRQ/180100001',
    transaction_date: '30/08/2015',
    approval_status: 'PENDING',
    approval_date: '08/08/2015',
    approval_by: 'Budi',
    pod_no: ''
  },
  {
    prq_no: 'JKT/PRQ/180100002',
    transaction_date: '30/08/2015',
    approval_status: 'APPROVED',
    approval_date: '08/08/2015',
    approval_by: 'Dhani',
    pod_no: 'JKT/POD/180100002, JKT/POD/180100003'
  },
  {
    prq_no: 'JKT/PRQ/180100003',
    transaction_date: '30/08/2015',
    approval_status: 'REJECTED',
    approval_by: 'Dhani',
    approval_date: '08/08/2015',
    pod_no: ''
  },
]

const getItem = (requestId) => {
  seeItem.value = true
  requestPosting.value = {
    prq_no: 'JKT/PRQ/180100001',
    transaction_date: '30/08/2015',
    ref_no: 'REF001',
    remark: 'Remark request posting',
    status: 1,
    approval_remark: 'FNC'
  }
  items.value = [
    {
      item_code: 'ABC',
      item_name: 'Item ABC',
      on_hand_stock: '200',
      min_stock: '100',
      max_stock: '500',
      monthly_avg: '',
      outstanding_po: '',
      due_date: '',
      qty: '200',
      uom: 'PCS'
    },
    {
      item_code: 'ABC',
      item_name: 'Item ABC',
      on_hand_stock: '200',
      min_stock: '100',
      max_stock: '500',
      monthly_avg: '',
      outstanding_po: '',
      due_date: '',
      qty: '200',
      uom: 'PCS'
    },
    {
      item_code: 'ABC',
      item_name: 'Item ABC',
      on_hand_stock: '200',
      min_stock: '100',
      max_stock: '500',
      monthly_avg: '',
      outstanding_po: '',
      due_date: '',
      qty: '200',
      uom: 'PCS'
    },
  ]
}

const closeItem = () => {
  seeItem.value = false
  requestPosting.value = null
  items.value = []
}
</script>

<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 order-0">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-2">
                      <label for="prq_no" class="form-label mb-1">PRQ No</label>
                      <input id="prq_no" class="form-control" type="text" autocomplete="off">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="mb-2">
                      <label for="period" class="form-label mb-1">Period</label>
                      <input id="period" class="form-control" type="text" autocomplete="off">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-2">
                      <label for="up_to" class="form-label mb-1">Up To</label>
                      <input id="up_to" class="form-control" autocomplete="off" type="text">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-2">
                      <label for="remark" class="form-label mb-1">Remark</label>
                      <input type="text" id="remark" class="form-control" autocomplete="off">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-2">
                      <label for="ref_no">Ref No</label>
                      <input type="text" id="ref_no" class="form-control" autocomplete="off">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-2">
                      <label for="status">Status</label>
                      <div class="d-flex items-center gap-2">
                        <div class="form-check form-check-inline mt-2">
                          <input class="form-check-input" name="status" type="radio" id="all" value="">
                          <label class="form-check-label" for="all">All</label>
                        </div>
                        <div class="form-check form-check-inline mt-2">
                          <input class="form-check-input" name="status" type="radio" id="pending" value="">
                          <label class="form-check-label" for="pending">Pending</label>
                        </div>
                        <div class="form-check form-check-inline mt-2">
                          <input class="form-check-input" name="status" type="radio" id="posted" value="">
                          <label class="form-check-label" for="posted">Posted</label>
                        </div>
                        <div class="form-check form-check-inline mt-2">
                          <input class="form-check-input" name="status" type="radio" id="rejected" value="">
                          <label class="form-check-label" for="rejected">Rejected</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="mt-2 text-end">
                  <button type="button" class="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th>PRQ No</th>
                    <th>Transaction Date</th>
                    <th>Approval Status</th>
                    <th>Approval Date</th>
                    <th>Approval By</th>
                    <th>POD No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(d, i) in data" :key="i">
                    <td>
                      <butto type="button" @click="getItem(++i)" class="btn btn-sm btn-warning">items</butto>
                    </td>
                    <td>{{ d.prq_no }}</td>
                    <td>{{ d.transaction_date }}</td>
                    <td>{{ d.approval_status }}</td>
                    <td>{{ d.approval_date }}</td>
                    <td>{{ d.approval_by }}</td>
                    <td>{{ d.pod_no }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="my-3" v-if="seeItem && requestPosting">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="mb-2">
                    <label for="prq_no" class="form-label mb-1">PRQ No</label>
                    <input id="prq_no" class="form-control" type="text" :value="requestPosting.prq_no" disabled>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="mb-2">
                    <label for="transaction" class="form-label mb-1">Transaction Date</label>
                    <input id="transaction" class="form-control" type="text" :value="requestPosting.transaction_date" disabled>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="mb-2">
                    <label for="refno" class="form-label mb-1">Ref No</label>
                    <input id="refno" class="form-control" type="text" :value="requestPosting.ref_no" disabled>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="mb-2">
                    <label for="status" class="form-label mb-1">Status</label>
                    <select id="status" class="form-control" :value="requestPosting.status">
                      <option value="0">Select Status</option>
                      <option value="1">Posted</option>
                      <option value="2">Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="mb-2">
                    <label for="remark" class="form-label mb-1">Remark</label>
                    <input id="remakr" class="form-control" type="text" :value="requestPosting.remark">
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="mb-2">
                    <label for="approval_remark" class="form-label mb-1">Approval Remark</label>
                    <input id="approval_remark" class="form-control" type="text" :value="requestPosting.approval_remark">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mt-2 d-flex gap-1">
                    <button type="button" class="btn btn-primary">Approve</button>
                    <button type="button" class="btn btn-warning">Cancel</button>
                    <button type="button" @click="closeItem()" class="btn btn-danger">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive text-nowrap" v-if="seeItem">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Item Code</th>
                    <th>Item Name</th>
                    <th>On Hand Stock</th>
                    <th>Min Stock</th>
                    <th>Max Stock</th>
                    <th class="text-center">
                      Monthly AVG <br />
                      Last 6 Months
                    </th>
                    <th>Outstanding PO</th>
                    <th>Due Date</th>
                    <th>Quantity</th>
                    <th>UoM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(d, i) in items" :key="i">
                    <td>{{ ++i }}</td>
                    <td>{{ d.item_code }}</td>
                    <td>{{ d.item_name }}</td>
                    <td>{{ d.on_hand_stock }}</td>
                    <td>{{ d.min_stock }}</td>
                    <td>{{ d.max_stock }}</td>
                    <td>{{ d.monthly_avg }}</td>
                    <td>{{ d.outstanding_po }}</td>
                    <td>{{ d.due_date }}</td>
                    <td>{{ d.qty }}</td>
                    <td>{{ d.uom }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>