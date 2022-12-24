<script setup>
import { ref, inject, watch } from 'vue'

const axios = inject('axios')

const loading = ref(false)
const items = ref([])
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  rowsPerPage: 5,
  sortBy: '',
  sortType: 'desc',
})
const headers = ref([
  { text: "TITLE", value: "title" },
  { text: "DIRECTOR", value: "director"},
  { text: "PRODUCER", value: "producer"},
  { text: "RELEASE DATE", value: "release_date"},
])

const loadFromServer = async () => {
  loading.value = true
  try {
    const http = await axios.get('https://swapi.dev/api/films')
    if (http) {
      items.value = http.results
      serverItemsLength.value = http.count
    }
    loading.value = false
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}

loadFromServer()

watch(serverOptions, value => {
  loadFromServer()
}, {deep: true})

const showRow = data => {
  // console.log(data)
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
                      <label for="no" class="form-label mb-1">IRQ No</label>
                      <input id="no" class="form-control" type="text" autocomplete="off">
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
                          <input class="form-check-input" name="status" type="radio" id="open" value="">
                          <label class="form-check-label" for="open">Open</label>
                        </div>
                        <div class="form-check form-check-inline mt-2">
                          <input class="form-check-input" name="status" type="radio" id="closed" value="">
                          <label class="form-check-label" for="closed">Closed</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="mt-2 d-flex justify-content-end">
                  <button type="button" class="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <EasyDataTable
              v-model:server-options="serverOptions"
              :server-items-length="serverItemsLength"
              :loading="loading"
              :headers="headers"
              :items="items"
              @click-row="showRow"
              border-cell
              show-index
            >
              <template #loading>
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </template>
            </EasyDataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>