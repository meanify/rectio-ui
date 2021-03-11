const DataWorkloads = {
  "Mainframe OffLoad": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink: "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T19:26:19Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:55:55Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Migration Job": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195530",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "828ed4fd-2b97-433b-9bd7-cbd17cea0764",
        annotations: {
          debug: "",
          job: "",
          lasAppliedConfiguration: "",
          status: "",
        },
        labels: {
          name: "",
          engine: "",
          context: "",
          status: "",
          workloadname: "",
        },
        creationTimestamp: "2021-02-21T17:21:03Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl2",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Active",
    archived: false,
    details: {
      job: {
        metadata: {
          creationTimestamp: null,
        },
        spec: {
          template: {
            metadata: {
              creationTimestamp: null,
            },
            spec: {
              containers: null,
            },
          },
        },
        status: {},
      },
      pods: {
        metadata: {},
        items: null,
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:09Z",
          },
          timestamp: "2021-03-11T22:16:59Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "0",
                memory: "3464Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:19Z",
          },
          timestamp: "2021-03-11T22:17:13Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "308106701n",
                memory: "122168Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:29Z",
          },
          timestamp: "2021-03-11T22:17:13Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "308106701n",
                memory: "122168Ki",
              },
            },
          ],
        },
      ],
      logs: "2021/02/21 17:19:40 - HopRun - Enabling project 'workload' \n2021/02/21 17:19:42 - workload - Start of workflow execution \n2021/02/21 17:19:42 - workload - Starting action [Pipeline]",
      history: {
        status: {},
        statusHistory: {},
      },
    },
  },
  "Margin Recalculation": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:20:05Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:27:50Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Cost Reconciliation": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Failed",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:25:34Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-22T02:21:16Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Cleanup": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195530",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "828ed4fd-2b97-433b-9bd7-cbd17cea0764",
        annotations: {
          debug: "",
          job: "",
          lasAppliedConfiguration: "",
          status: "",
        },
        labels: {
          name: "",
          engine: "",
          context: "",
          status: "",
          workloadname: "",
        },
        creationTimestamp: "2021-02-21T17:21:03Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl2",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Active",
    archived: false,
    details: {
      job: {
        metadata: {
          creationTimestamp: null,
        },
        spec: {
          template: {
            metadata: {
              creationTimestamp: null,
            },
            spec: {
              containers: null,
            },
          },
        },
        status: {},
      },
      pods: {
        metadata: {},
        items: null,
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:09Z",
          },
          timestamp: "2021-03-11T22:16:59Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "0",
                memory: "3464Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:19Z",
          },
          timestamp: "2021-03-11T22:17:13Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "308106701n",
                memory: "122168Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-m2vsf",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/ssadadddddddd-m2vsf",
            creationTimestamp: "2021-03-11T22:17:29Z",
          },
          timestamp: "2021-03-11T22:17:13Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "308106701n",
                memory: "122168Ki",
              },
            },
          ],
        },
      ],
      logs: "",
      history: {
        status: {},
        statusHistory: {},
      },
    },
  },
  "Reconciliation": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-23T19:20:05Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T18:22:05Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Personal Data Validator": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:20:05Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:20:05Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Schedule 2021-02-21T17:19:05Z": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-21T17:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:20:05Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-23T17:20:05Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  "Monthly Salary Calculations ": {
    name: "rectiowkl",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "rectiowkl",
        namespace: "default",
        resourceVersion: "4195366",
        selfLink:
          "/apis/k8s.meanify.org/v1/namespaces/default/workloads/rectiowkl",
        uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-02-21T17:20:05Z", "conditions": [{"lastProbeTime": "2021-02-21T17:20:05Z", "lastTransitionTime": "2021-02-21T17:20:05Z", "status": "True", "type": "Complete"}], "startTime": "2021-02-21T17:19:05Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "rectiowkl",
        },
        creationTimestamp: "2021-02-20T12:19:05Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: null,
        systemproperties: null,
        resources: {
          limits: {
            cpu: "150m",
            memory: "150Mi",
          },
          requests: {
            cpu: "150m",
            memory: "150Mi",
          },
        },
      },
      context: {
        dimensions: null,
        tags: null,
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "rectiowkl",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/rectiowkl",
          uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
          resourceVersion: "4195365",
          creationTimestamp: "2021-02-21T17:19:05Z",
          labels: {
            context: "rectio",
            "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            "job-name": "rectiowkl",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller":
              "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"rectiowkl"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.60","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "rectiowkl",
              uid: "c683e90f-44bc-46dc-abd6-869f8a6505da",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:19:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:metacontroller.k8s.io/decorator-controller": {},
                    "f:metacontroller.k8s.io/last-applied-configuration": {},
                  },
                  "f:labels": {
                    ".": {},
                    "f:context": {},
                  },
                  "f:ownerReferences": {
                    ".": {},
                    'k:{"uid":"c683e90f-44bc-46dc-abd6-869f8a6505da"}': {
                      ".": {},
                      "f:apiVersion": {},
                      "f:blockOwnerDeletion": {},
                      "f:controller": {},
                      "f:kind": {},
                      "f:name": {},
                      "f:uid": {},
                    },
                  },
                },
                "f:spec": {
                  "f:activeDeadlineSeconds": {},
                  "f:backoffLimit": {},
                  "f:completions": {},
                  "f:parallelism": {},
                  "f:template": {
                    "f:metadata": {
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
              },
            },
            {
              manager: "kube-controller-manager",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-02-21T17:20:05Z",
              fieldsType: "FieldsV1",
              fieldsV1: {
                "f:status": {
                  "f:completionTime": {},
                  "f:conditions": {
                    ".": {},
                    'k:{"type":"Complete"}': {
                      ".": {},
                      "f:lastProbeTime": {},
                      "f:lastTransitionTime": {},
                      "f:status": {},
                      "f:type": {},
                    },
                  },
                  "f:startTime": {},
                  "f:succeeded": {},
                },
              },
            },
          ],
        },
        spec: {
          parallelism: 1,
          completions: 1,
          activeDeadlineSeconds: 86400,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              securityContext: {},
              schedulerName: "default-scheduler",
            },
          },
        },
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-21T17:20:05Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "4195388",
        },
        items: [
          {
            metadata: {
              name: "rectiowkl-f6276",
              generateName: "rectiowkl-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/rectiowkl-f6276",
              uid: "6d0f2645-1e89-4016-9bb4-8ce3a9af6126",
              resourceVersion: "4195363",
              creationTimestamp: "2021-02-21T17:19:05Z",
              labels: {
                context: "rectio",
                "controller-uid": "a4564350-5475-41c7-aa06-f341e5110e0c",
                "job-name": "rectiowkl",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "rectiowkl",
                  uid: "a4564350-5475-41c7-aa06-f341e5110e0c",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:19:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:metadata": {
                      "f:generateName": {},
                      "f:labels": {
                        ".": {},
                        "f:context": {},
                        "f:controller-uid": {},
                        "f:job-name": {},
                      },
                      "f:ownerReferences": {
                        ".": {},
                        'k:{"uid":"a4564350-5475-41c7-aa06-f341e5110e0c"}': {
                          ".": {},
                          "f:apiVersion": {},
                          "f:blockOwnerDeletion": {},
                          "f:controller": {},
                          "f:kind": {},
                          "f:name": {},
                          "f:uid": {},
                        },
                      },
                    },
                    "f:spec": {
                      "f:containers": {
                        'k:{"name":"hop"}': {
                          ".": {},
                          "f:args": {},
                          "f:command": {},
                          "f:env": {
                            ".": {},
                            'k:{"name":"HOP_LOG_LEVEL"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                            'k:{"name":"HOP_WORKLOAD"}': {
                              ".": {},
                              "f:name": {},
                              "f:value": {},
                            },
                          },
                          "f:image": {},
                          "f:imagePullPolicy": {},
                          "f:name": {},
                          "f:resources": {
                            ".": {},
                            "f:limits": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                            "f:requests": {
                              ".": {},
                              "f:cpu": {},
                              "f:memory": {},
                            },
                          },
                          "f:terminationMessagePath": {},
                          "f:terminationMessagePolicy": {},
                        },
                      },
                      "f:dnsPolicy": {},
                      "f:enableServiceLinks": {},
                      "f:restartPolicy": {},
                      "f:schedulerName": {},
                      "f:securityContext": {},
                      "f:terminationGracePeriodSeconds": {},
                    },
                  },
                },
                {
                  manager: "kubelet",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-02-21T17:20:05Z",
                  fieldsType: "FieldsV1",
                  fieldsV1: {
                    "f:status": {
                      "f:conditions": {
                        'k:{"type":"ContainersReady"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Initialized"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                        'k:{"type":"Ready"}': {
                          ".": {},
                          "f:lastProbeTime": {},
                          "f:lastTransitionTime": {},
                          "f:reason": {},
                          "f:status": {},
                          "f:type": {},
                        },
                      },
                      "f:containerStatuses": {},
                      "f:hostIP": {},
                      "f:phase": {},
                      "f:podIP": {},
                      "f:podIPs": {
                        ".": {},
                        'k:{"ip":"10.244.0.9"}': {
                          ".": {},
                          "f:ip": {},
                        },
                      },
                      "f:startTime": {},
                    },
                  },
                },
              ],
            },
            spec: {
              volumes: [
                {
                  name: "default-token-mqjn2",
                  secret: {
                    secretName: "default-token-mqjn2",
                    defaultMode: 420,
                  },
                },
              ],
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.60",
                  command: ["./hop-work.sh"],
                  args: [
                    "-j",
                    "workload",
                    "-r",
                    "local",
                    "-l",
                    "BASIC",
                    "-f",
                    "/opt/hop/slimhop/artifacts/workload.hwf",
                  ],
                  env: [
                    {
                      name: "HOP_LOG_LEVEL",
                      value: "BASIC",
                    },
                    {
                      name: "HOP_WORKLOAD",
                      value: "/opt/hop/slimhop/artifacts/workload.hwf",
                    },
                  ],
                  resources: {
                    limits: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                    requests: {
                      cpu: "150m",
                      memory: "150Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath:
                        "/var/run/secrets/kubernetes.io/serviceaccount",
                    },
                  ],
                  terminationMessagePath: "/dev/termination-log",
                  terminationMessagePolicy: "File",
                  imagePullPolicy: "IfNotPresent",
                },
              ],
              restartPolicy: "OnFailure",
              terminationGracePeriodSeconds: 30,
              dnsPolicy: "ClusterFirst",
              serviceAccountName: "default",
              serviceAccount: "default",
              nodeName: "hop-control-plane",
              securityContext: {},
              schedulerName: "default-scheduler",
              tolerations: [
                {
                  key: "node.kubernetes.io/not-ready",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
                {
                  key: "node.kubernetes.io/unreachable",
                  operator: "Exists",
                  effect: "NoExecute",
                  tolerationSeconds: 300,
                },
              ],
              priority: 0,
              enableServiceLinks: true,
              preemptionPolicy: "PreemptLowerPriority",
            },
            status: {
              phase: "Succeeded",
              conditions: [
                {
                  type: "Initialized",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:20:05Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-02-21T17:19:05Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.9",
              podIPs: [
                {
                  ip: "10.244.0.9",
                },
              ],
              startTime: "2021-02-21T17:19:05Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-02-21T17:19:06Z",
                      finishedAt: "2021-02-21T17:20:04Z",
                      containerID:
                        "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.60",
                  imageID:
                    "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                  started: false,
                },
              ],
              qosClass: "Guaranteed",
            },
          },
        ],
      },
      metrics: [
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:32Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:42Z",
          },
          timestamp: "2021-02-21T17:19:24Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "150387786n",
                memory: "74736Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:19:52Z",
          },
          timestamp: "2021-02-21T17:19:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149539921n",
                memory: "113440Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "rectiowkl-f6276",
            namespace: "default",
            selfLink:
              "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/rectiowkl-f6276",
            creationTimestamp: "2021-02-21T17:20:02Z",
          },
          timestamp: "2021-02-21T17:19:53Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "149703580n",
                memory: "132648Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/02/21 17:19:40 - HopRun - Enabling project 'workload'\n2021/02/21 17:19:42 - workload - Start of workflow execution\n2021/02/21 17:19:42 - workload - Starting action [Pipeline]\n2021/02/21 17:19:43 - Pipeline - Using run configuration [local]\n2021/02/21 17:19:43 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/02/21 17:19:43 - workload - Execution started for pipeline [workload]\n2021/02/21 17:19:55 - Generate rows.0 - LineNr : 50000\n2021/02/21 17:19:56 - Dummy (do nothing).0 - Linenr 50000\n2021/02/21 17:20:02 - Generate rows.0 - LineNr : 100000\n2021/02/21 17:20:02 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Linenr 100000\n2021/02/21 17:20:03 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/02/21 17:20:03 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/02/21 17:20:04 - workload - Pipeline lines read: 100000 ( 4761 lines/s); lines written: 100000 ( 4761 lines/s)\n2021/02/21 17:20:04 - workload - Starting action [Success]\n2021/02/21 17:20:04 - workload - Finished action [Success] (result=[true])\n2021/02/21 17:20:04 - workload - Finished action [Pipeline] (result=[true])\n2021/02/21 17:20:04 - workload - Workflow execution finished\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-02-21T17:20:05Z",
              lastTransitionTime: "2021-02-21T17:20:05Z",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          completionTime: "2021-02-22T13:20:05Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:20:05Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-02-21T17:19:05Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.9",
          podIPs: [
            {
              ip: "10.244.0.9",
            },
          ],
          startTime: "2021-02-21T17:19:05Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-02-21T17:19:06Z",
                  finishedAt: "2021-02-21T17:20:04Z",
                  containerID:
                    "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.60",
              imageID:
                "docker.io/meanify/slimhop@sha256:998ca9059c300b52b206c3812dc567f3cdbf0e51f3e803ecce25e610b16108cc",
              containerID:
                "containerd://cebeb99b80a1bc5042845bf7815ef1c6c26c615117699cfdf3fecb3fb03cd8bd",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
};

export default DataWorkloads;
