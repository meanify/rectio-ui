import { makeObservable, observable, action, computed } from "mobx";
import DataWorkloads from "./DataWorkloads";
import * as mobx from "mobx";

class DataWorkloadsStore {
  dataWorkloads;

  constructor() {
    this.dataWorkloads = observable.map(DataWorkloads, { deep: true });
    makeObservable(this, {
      dataWorkloads: observable,
      getWorkloads: action,
      countSuccedded: action, 
      activeResources: computed,
      total: computed,
      active: computed,
      successed: computed,
      failed: computed,
    });
  }

  getWorkloads(wklName) {
    return mobx.toJS(this.dataWorkloads) 
  }
  
  getWorkload(wklName) {
    return mobx.toJS(this.dataWorkloads) 
  }

  getWorkloadMetrics(wklName) {
\    return mobx.toJS(this.dataWorkloads.get(wklName)).details.metrics  
  }

  upsertWorkloads(wklName, wklSpecs) {
    this.dataWorkloads.set(wklName, wklSpecs)
  }

  deleteWorkloads(wklName) {
    this.dataWorkloads.remove(wklName)
  }
  
  countSuccedded() {
    return this.dataWorkloads.size
  }

  get activeResources() {
    return {cpu: 400, memory: 300}
  }

  get active() {
    return 2
  }

  get successed() {
    return 5
  }
  get failed() {
    return 1
  }

  get total() {
    return this.dataWorkloads.size
  }
}

export default new DataWorkloadsStore();
