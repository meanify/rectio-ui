import { makeObservable, observable, action, computed } from "mobx";
import DataWorkloads from "./DataWorkloads";
import * as mobx from "mobx";
import _ from "lodash";
import Numbro from "numbro";

import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

class DataWorkloadsStore {
  dataWorkloads;
  isFetching;

  constructor() {
    this.isFetching = true;
    //this.dataWorkloads = observable.map({}, { deep: true });
    this.dataWorkloads = observable.map(DataWorkloads, { deep: true });
    this.isFetching = false;

    makeObservable(this, {
      dataWorkloads: observable,
      fetchWorkloads: action,
      fetchWorkload: action,
      getWorkloads: action,
      countSuccedded: action,
      activeResources: computed,
      total: computed,
      active: computed,
      successed: computed,
      failed: computed,
    });
  }

  processResponse(response) {
    console.log(response);
    const message = response?.data;
    if (message !== "undefined") {
      console.log(message);
      this.dataWorkloads = observable.map(message, { deep: true });
    }
  }

  fetchWorkloads() {
    let that = this;
    api.get("workload").then((response) => {
      that.processResponse(response);
    });
  }

  fetchWorkload(wklname) {
    api.get("workload").then((response) => {
      console.log(response);
      const message = response?.data;
      if (message !== "undefined") {
        console.log(message);
        this.dataWorkloads = observable.map(message, { deep: true });
      }
    });
  }

  getWorkloads() {
    /*
    api.get("workload").then((response) => {
      console.log(response);
      const message = response?.data
      if (message !== "undefined") {
        console.log(message);
        this.dataWorkloads = observable.map(message, { deep: true });
      }
    })*/
    return mobx.toJS(this.dataWorkloads);
  }

  getWorkload(wklName) {
    return mobx.toJS(this.dataWorkloads);
  }

  getWorkloadMetrics(wklName) {
    return mobx.toJS(this.dataWorkloads.get(wklName)).details.metrics;
  }

  upsertWorkloads(wklName, wklSpecs) {
    this.dataWorkloads.set(wklName, wklSpecs);
  }

  deleteWorkloads(wklName) {
    this.dataWorkloads.remove(wklName);
  }

  countSuccedded() {
    return this.dataWorkloads.size;
  }


  get activeResources() {
    const numbroFormat = {
      trimMantissa: true,
      mantissa: 2,
    };
    const numbroFormatByte = {
      trimMantissa: true,
      output: "byte",
      base: "binary",
      mantissa: 1,
      spaceSeparated: true,
    };
    let active = [...this.getWorkloads().entries()].filter((value) => {
      return value[1].status === "Active";
    });
    let metricsCollection = active.map((value) => {
      let val = value[1].details.metrics;
      return val ? _.last(val) : null;
    }).filter((value) => {return value != null});
    let cpu = _.sum(metricsCollection.map((value) => {return parseInt(value.containers[0].usage["cpu"])})) / 1000000000;
    let memory = _.sum(metricsCollection.map((value) => {return parseInt(value.containers[0].usage["memory"])}));
    return { cpu: Numbro(cpu).format(numbroFormat), memory: Numbro(memory).format(numbroFormatByte) };
  }

  get active() {
    return [...this.getWorkloads().entries()].filter((value) => {
      return value[1].status === "Active";
    }).length;
  }

  get successed() {
    return [...this.getWorkloads().entries()].filter((value) => {
      return value[1].status === "Succeeded";
    }).length;
  }

  get failed() {
    return [...this.getWorkloads().entries()].filter((value) => {
      return value[1].status === "Failed";
    }).length;
  }

  get total() {
    return this.dataWorkloads.size;
  }
}

export default new DataWorkloadsStore();
