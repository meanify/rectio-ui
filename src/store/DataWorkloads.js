const DataWorkloads = {
  rectiowkl: {
    name: "ssadadddddddd",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "ssadadddddddd",
        namespace: "default",
        resourceVersion: "6424384",
        selfLink: "/apis/k8s.meanify.org/v1/namespaces/default/workloads/ssadadddddddd",
        uid: "47b33864-9769-47eb-9ef8-6ef80ce5b021",
        annotations: {
          debug: "",
          job: "",
          lasAppliedConfiguration: "",
          status: "",
        },
        labels: {
          name: "rectiowkl",
          engine: "hop",
          context: "",
          status: "",
          workloadname: "",
        },
        creationTimestamp: "2021-03-11T22:16:58Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 3600,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: [
          {
            key: "limit",
            value: "100000",
          },
        ],
        systemproperties: [],
        resources: {
          limits: {
            cpu: "250m",
            memory: "250Mi",
          },
          requests: {
            cpu: "500m",
            memory: "500Mi",
          },
        },
      },
      context: {
        dimensions: [],
        tags: ["Demo", "Workloads", "k8s", "Apache Hop"],
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
      metrics: null,
      logs: "",
      history: {
        status: {},
        statusHistory: {},
      },
    },
  },
  ssadadddddddd: {
    name: "ssadadddddddd",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "ssadadddddddd",
        namespace: "default",
        resourceVersion: "6424394",
        selfLink: "/apis/k8s.meanify.org/v1/namespaces/default/workloads/ssadadddddddd",
        uid: "47b33864-9769-47eb-9ef8-6ef80ce5b021",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status: '{"active": 1, "startTime": "2021-03-11T22:16:58Z"}',
        },
        labels: {
          name: "rectiowkl",
          engine: "hop",
          context: "rectio",
          status: "active",
          workloadname: "ssadadddddddd",
        },
        creationTimestamp: "2021-03-11T22:16:58Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 3600,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: [
          {
            key: "limit",
            value: "100000",
          },
        ],
        systemproperties: [],
        resources: {
          limits: {
            cpu: "250m",
            memory: "250Mi",
          },
          requests: {
            cpu: "500m",
            memory: "500Mi",
          },
        },
      },
      context: {
        dimensions: [],
        tags: ["Demo", "Workloads", "k8s", "Apache Hop"],
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
            name: "ssadadddddddd-m2vsf",
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
            name: "ssadadddddddd-m2vsf",
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
            name: "ssadadddddddd-m2vsf",
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
      logs:
        "2021/03/11 22:17:07 - HopRun - Enabling project 'workload'\n2021/03/11 22:17:18 - HopRun - Starting workflow: /opt/hop/slimhop/artifacts/workload.hwf\n2021/03/11 22:17:18 - workload - Start of workflow execution\n2021/03/11 22:17:18 - workload - Starting action [Pipeline]\n2021/03/11 22:17:18 - Pipeline - Using run configuration [local]\n2021/03/11 22:17:18 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/03/11 22:17:18 - workload - Execution started for pipeline [workload]\n2021/03/11 22:17:23 - Generate rows.0 - LineNr : 50000\n2021/03/11 22:17:25 - Dummy (do nothing).0 - Linenr 50000\n2021/03/11 22:17:27 - Generate rows.0 - LineNr : 100000\n2021/03/11 22:17:27 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=100000, U=0, E=0)\n2021/03/11 22:17:28 - Delay Row.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/03/11 22:17:28 - Write to log.0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/03/11 22:17:28 - Dummy (do nothing).0 - Linenr 100000\n2021/03/11 22:17:28 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=100000, W=100000, U=0, E=0)\n2021/03/11 22:17:28 - workload - Pipeline duration : 9.89 seconds [  9.890\" ]\n2021/03/11 22:17:28 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n",
      history: {
        status: {},
        statusHistory: {},
      },
    },
  },
  sss: {
    name: "sss",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "sss",
        namespace: "default",
        resourceVersion: "6422526",
        selfLink: "/apis/k8s.meanify.org/v1/namespaces/default/workloads/sss",
        uid: "284f3b6b-94dc-4ce0-b44b-a26ec4a07d20",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-03-11T22:05:30Z", "conditions": [{"lastProbeTime": "2021-03-11T22:05:30Z", "lastTransitionTime": "2021-03-11T22:05:30Z", "status": "True", "type": "Complete"}], "startTime": "2021-03-11T22:05:07Z", "succeeded": 1}',
        },
        labels: {
          name: "rectiowkl",
          engine: "hop",
          context: "rectio",
          status: "succeeded",
          workloadname: "sss",
        },
        creationTimestamp: "2021-03-11T22:05:07Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 3600,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: [],
        systemproperties: [],
        resources: {
          limits: {
            cpu: "500m",
            memory: "500Mi",
          },
          requests: {
            cpu: "500m",
            memory: "500Mi",
          },
        },
      },
      context: {
        dimensions: [],
        tags: ["Demo", "Workloads", "k8s", "Apache Hop"],
      },
    },
    status: "Succeeded",
    archived: true,
    details: {
      job: {
        metadata: {
          name: "sss",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/sss",
          uid: "aa607ced-3d06-40fa-868e-aac5ffc8189e",
          resourceVersion: "6422525",
          creationTimestamp: "2021-03-11T22:05:07Z",
          labels: {
            context: "rectio",
            "controller-uid": "aa607ced-3d06-40fa-868e-aac5ffc8189e",
            "job-name": "sss",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller": "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"sss"},"spec":{"activeDeadlineSeconds":3600,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.70","name":"hop","resources":{"limits":{"cpu":"500m","memory":"500Mi"},"requests":{"cpu":"500m","memory":"500Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "sss",
              uid: "284f3b6b-94dc-4ce0-b44b-a26ec4a07d20",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-03-11T22:05:07Z",
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
                    'k:{"uid":"284f3b6b-94dc-4ce0-b44b-a26ec4a07d20"}': {
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
              time: "2021-03-11T22:05:30Z",
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
          activeDeadlineSeconds: 3600,
          backoffLimit: 3,
          selector: {
            matchLabels: {
              "controller-uid": "aa607ced-3d06-40fa-868e-aac5ffc8189e",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "aa607ced-3d06-40fa-868e-aac5ffc8189e",
                "job-name": "sss",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.70",
                  command: ["./hop-work.sh"],
                  args: ["-j", "workload", "-r", "local", "-l", "BASIC", "-f", "/opt/hop/slimhop/artifacts/workload.hwf"],
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
                      cpu: "500m",
                      memory: "500Mi",
                    },
                    requests: {
                      cpu: "500m",
                      memory: "500Mi",
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
              lastProbeTime: "2021-03-11T22:05:30Z",
              lastTransitionTime: "2021-03-11T22:05:30Z",
            },
          ],
          startTime: "2021-03-11T22:05:07Z",
          completionTime: "2021-03-11T22:05:30Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "6422553",
        },
        items: [
          {
            metadata: {
              name: "sss-nsntt",
              generateName: "sss-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/sss-nsntt",
              uid: "24d120ac-1ebe-4ef4-88cc-04f26be796f0",
              resourceVersion: "6422523",
              creationTimestamp: "2021-03-11T22:05:07Z",
              labels: {
                context: "rectio",
                "controller-uid": "aa607ced-3d06-40fa-868e-aac5ffc8189e",
                "job-name": "sss",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "sss",
                  uid: "aa607ced-3d06-40fa-868e-aac5ffc8189e",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-03-11T22:05:07Z",
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
                        'k:{"uid":"aa607ced-3d06-40fa-868e-aac5ffc8189e"}': {
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
                  time: "2021-03-11T22:05:30Z",
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
                        'k:{"ip":"10.244.0.45"}': {
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
                  image: "meanify/slimhop:0.70",
                  command: ["./hop-work.sh"],
                  args: ["-j", "workload", "-r", "local", "-l", "BASIC", "-f", "/opt/hop/slimhop/artifacts/workload.hwf"],
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
                      cpu: "500m",
                      memory: "500Mi",
                    },
                    requests: {
                      cpu: "500m",
                      memory: "500Mi",
                    },
                  },
                  volumeMounts: [
                    {
                      name: "default-token-mqjn2",
                      readOnly: true,
                      mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
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
                  lastTransitionTime: "2021-03-11T22:05:07Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T22:05:30Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T22:05:30Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T22:05:07Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.45",
              podIPs: [
                {
                  ip: "10.244.0.45",
                },
              ],
              startTime: "2021-03-11T22:05:07Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-03-11T22:05:08Z",
                      finishedAt: "2021-03-11T22:05:29Z",
                      containerID: "containerd://5ce87507cdd5a92b52e460e802fe26c3d052f774c9dad4d461cbf2c9e5ca320e",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.70",
                  imageID: "docker.io/meanify/slimhop@sha256:48032154ac50eb1887c02c2f082443f20ddbc2e38a6ffb9e9a8e5a4b6c17c99a",
                  containerID: "containerd://5ce87507cdd5a92b52e460e802fe26c3d052f774c9dad4d461cbf2c9e5ca320e",
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
            name: "sss-nsntt",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/sss-nsntt",
            creationTimestamp: "2021-03-11T22:05:29Z",
          },
          timestamp: "2021-03-11T22:05:08Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "0",
                memory: "2216Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/03/11 22:05:16 - HopRun - Enabling project 'workload'\n2021/03/11 22:05:27 - HopRun - Starting workflow: /opt/hop/slimhop/artifacts/workload.hwf\n2021/03/11 22:05:27 - workload - Start of workflow execution\n2021/03/11 22:05:27 - workload - Starting action [Pipeline]\n2021/03/11 22:05:27 - Pipeline - Using run configuration [local]\n2021/03/11 22:05:28 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/03/11 22:05:28 - workload - Execution started for pipeline [workload]\n2021/03/11 22:05:29 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=10, U=0, E=0)\n2021/03/11 22:05:29 - Delay Row.0 - Finished processing (I=0, O=0, R=10, W=10, U=0, E=0)\n2021/03/11 22:05:29 - Write to log.0 - Finished processing (I=0, O=0, R=10, W=10, U=0, E=0)\n2021/03/11 22:05:29 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=10, W=10, U=0, E=0)\n2021/03/11 22:05:29 - workload - Pipeline duration : 1.104 seconds [  1.104\" ]\n2021/03/11 22:05:29 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/03/11 22:05:29 - workload - Starting action [Write to log]\n2021/03/11 22:05:29 - INFO:  - WORKLOAD: /opt/hop/slimhop/home/workload.hpl\n2021/03/11 22:05:29 - INFO:  - SENTENCE: Rectio Project\n2021/03/11 22:05:29 - INFO:  - DELAY: 0\n2021/03/11 22:05:29 - INFO:  - LIMIT: 10\n2021/03/11 22:05:29 - workload - Starting action [Success]\n2021/03/11 22:05:29 - workload - Finished action [Success] (result=[true])\n2021/03/11 22:05:29 - workload - Finished action [Write to log] (result=[true])\n2021/03/11 22:05:29 - workload - Finished action [Pipeline] (result=[true])\n2021/03/11 22:05:29 - workload - Workflow execution finished\n2021/03/11 22:05:29 - workload - Workflow duration : 2.403 seconds [  2.403\" ]\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-03-11T22:05:30Z",
              lastTransitionTime: "2021-03-11T22:05:30Z",
            },
          ],
          startTime: "2021-03-11T22:05:07Z",
          completionTime: "2021-03-11T22:05:30Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T22:05:07Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T22:05:30Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T22:05:30Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T22:05:07Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.45",
          podIPs: [
            {
              ip: "10.244.0.45",
            },
          ],
          startTime: "2021-03-11T22:05:07Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-03-11T22:05:08Z",
                  finishedAt: "2021-03-11T22:05:29Z",
                  containerID: "containerd://5ce87507cdd5a92b52e460e802fe26c3d052f774c9dad4d461cbf2c9e5ca320e",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.70",
              imageID: "docker.io/meanify/slimhop@sha256:48032154ac50eb1887c02c2f082443f20ddbc2e38a6ffb9e9a8e5a4b6c17c99a",
              containerID: "containerd://5ce87507cdd5a92b52e460e802fe26c3d052f774c9dad4d461cbf2c9e5ca320e",
              started: false,
            },
          ],
          qosClass: "Guaranteed",
        },
      },
    },
  },
  testok3: {
    name: "testok3",
    workload: {
      apiVersion: "k8s.meanify.org/v1",
      kind: "Workload",
      metadata: {
        name: "testok3",
        namespace: "default",
        resourceVersion: "6401619",
        selfLink: "/apis/k8s.meanify.org/v1/namespaces/default/workloads/testok3",
        uid: "cc86372f-27b8-4992-b31e-e3d820f3f3ae",
        annotations: {
          debug: "{ }",
          job: "",
          lasAppliedConfiguration: "",
          status:
            '{"completionTime": "2021-03-11T19:56:09Z", "conditions": [{"lastProbeTime": "2021-03-11T19:56:09Z", "lastTransitionTime": "2021-03-11T19:56:09Z", "status": "True", "type": "Complete"}], "startTime": "2021-03-11T19:55:17Z", "succeeded": 1}',
        },
        labels: {
          name: "",
          engine: "",
          context: "rectio",
          status: "succeeded",
          workloadname: "testok3",
        },
        creationTimestamp: "2021-03-11T19:55:17Z",
        generation: 1,
      },
      spec: {
        name: "rectiowkl",
        activeDeadlineSeconds: 86400,
        backoffLimit: 3,
        loglevel: "BASIC",
        restartPolicy: "OnFailure",
        workload: "/opt/hop/slimhop/artifacts/workload.hwf",
        parameters: [
          {
            key: "delay",
            value: "0",
          },
          {
            key: "limit",
            value: "1000",
          },
          {
            key: "sentence",
            value: "Hello World!",
          },
        ],
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
          name: "testok3",
          namespace: "default",
          selfLink: "/apis/batch/v1/namespaces/default/jobs/testok3",
          uid: "1be71217-80a7-4e2f-917b-190cad008e84",
          resourceVersion: "6401618",
          creationTimestamp: "2021-03-11T19:55:17Z",
          labels: {
            context: "rectio",
            "controller-uid": "1be71217-80a7-4e2f-917b-190cad008e84",
            "job-name": "testok3",
          },
          annotations: {
            "metacontroller.k8s.io/decorator-controller": "workloads-metacontroller",
            "metacontroller.k8s.io/last-applied-configuration":
              '{"apiVersion":"batch/v1","kind":"Job","metadata":{"annotations":{"metacontroller.k8s.io/decorator-controller":"workloads-metacontroller"},"name":"testok3"},"spec":{"activeDeadlineSeconds":86400,"backoffLimit":3,"completions":1,"parallelism":1,"template":{"metadata":{"labels":{"context":"rectio"}},"spec":{"containers":[{"args":["-j","workload","-r","local","-l","BASIC","-f","/opt/hop/slimhop/artifacts/workload.hwf","-p","delay=0","-p","limit=1000","-p","sentence=Hello World!"],"command":["./hop-work.sh"],"env":[{"name":"HOP_LOG_LEVEL","value":"BASIC"},{"name":"HOP_WORKLOAD","value":"/opt/hop/slimhop/artifacts/workload.hwf"}],"image":"meanify/slimhop:0.70","name":"hop","resources":{"limits":{"cpu":"150m","memory":"150Mi"},"requests":{"cpu":"150m","memory":"150Mi"}}}],"restartPolicy":"OnFailure"}}}}',
          },
          ownerReferences: [
            {
              apiVersion: "k8s.meanify.org/v1",
              kind: "Workload",
              name: "testok3",
              uid: "cc86372f-27b8-4992-b31e-e3d820f3f3ae",
              controller: true,
              blockOwnerDeletion: true,
            },
          ],
          managedFields: [
            {
              manager: "metacontroller",
              operation: "Update",
              apiVersion: "batch/v1",
              time: "2021-03-11T19:55:17Z",
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
                    'k:{"uid":"cc86372f-27b8-4992-b31e-e3d820f3f3ae"}': {
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
              time: "2021-03-11T19:56:09Z",
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
              "controller-uid": "1be71217-80a7-4e2f-917b-190cad008e84",
            },
          },
          template: {
            metadata: {
              creationTimestamp: null,
              labels: {
                context: "rectio",
                "controller-uid": "1be71217-80a7-4e2f-917b-190cad008e84",
                "job-name": "testok3",
              },
            },
            spec: {
              containers: [
                {
                  name: "hop",
                  image: "meanify/slimhop:0.70",
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
                    "-p",
                    "delay=0",
                    "-p",
                    "limit=1000",
                    "-p",
                    "sentence=Hello World!",
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
              lastProbeTime: "2021-03-11T19:56:09Z",
              lastTransitionTime: "2021-03-11T19:56:09Z",
            },
          ],
          startTime: "2021-03-11T19:55:17Z",
          completionTime: "2021-03-11T19:56:09Z",
          succeeded: 1,
        },
      },
      pods: {
        metadata: {
          selfLink: "/api/v1/namespaces/default/pods",
          resourceVersion: "6401619",
        },
        items: [
          {
            metadata: {
              name: "testok3-5scqv",
              generateName: "testok3-",
              namespace: "default",
              selfLink: "/api/v1/namespaces/default/pods/testok3-5scqv",
              uid: "a93639ee-ae46-4c8a-8725-5db4ad37d36c",
              resourceVersion: "6401616",
              creationTimestamp: "2021-03-11T19:55:17Z",
              labels: {
                context: "rectio",
                "controller-uid": "1be71217-80a7-4e2f-917b-190cad008e84",
                "job-name": "testok3",
              },
              ownerReferences: [
                {
                  apiVersion: "batch/v1",
                  kind: "Job",
                  name: "testok3",
                  uid: "1be71217-80a7-4e2f-917b-190cad008e84",
                  controller: true,
                  blockOwnerDeletion: true,
                },
              ],
              managedFields: [
                {
                  manager: "kube-controller-manager",
                  operation: "Update",
                  apiVersion: "v1",
                  time: "2021-03-11T19:55:17Z",
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
                        'k:{"uid":"1be71217-80a7-4e2f-917b-190cad008e84"}': {
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
                  time: "2021-03-11T19:56:09Z",
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
                        'k:{"ip":"10.244.0.44"}': {
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
                  image: "meanify/slimhop:0.70",
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
                    "-p",
                    "delay=0",
                    "-p",
                    "limit=1000",
                    "-p",
                    "sentence=Hello World!",
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
                      mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
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
                  lastTransitionTime: "2021-03-11T19:55:17Z",
                  reason: "PodCompleted",
                },
                {
                  type: "Ready",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T19:56:09Z",
                  reason: "PodCompleted",
                },
                {
                  type: "ContainersReady",
                  status: "False",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T19:56:09Z",
                  reason: "PodCompleted",
                },
                {
                  type: "PodScheduled",
                  status: "True",
                  lastProbeTime: null,
                  lastTransitionTime: "2021-03-11T19:55:17Z",
                },
              ],
              hostIP: "172.18.0.2",
              podIP: "10.244.0.44",
              podIPs: [
                {
                  ip: "10.244.0.44",
                },
              ],
              startTime: "2021-03-11T19:55:17Z",
              containerStatuses: [
                {
                  name: "hop",
                  state: {
                    terminated: {
                      exitCode: 0,
                      reason: "Completed",
                      startedAt: "2021-03-11T19:55:18Z",
                      finishedAt: "2021-03-11T19:56:08Z",
                      containerID: "containerd://677ce4040d2582d4bc26d36abdaa08958e97722829100959ff725ddef38e01be",
                    },
                  },
                  lastState: {},
                  ready: false,
                  restartCount: 0,
                  image: "docker.io/meanify/slimhop:0.70",
                  imageID: "docker.io/meanify/slimhop@sha256:48032154ac50eb1887c02c2f082443f20ddbc2e38a6ffb9e9a8e5a4b6c17c99a",
                  containerID: "containerd://677ce4040d2582d4bc26d36abdaa08958e97722829100959ff725ddef38e01be",
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
            name: "testok3-5scqv",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/testok3-5scqv",
            creationTimestamp: "2021-03-11T19:55:29Z",
          },
          timestamp: "2021-03-11T19:55:18Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "0",
                memory: "9396Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "testok3-5scqv",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/testok3-5scqv",
            creationTimestamp: "2021-03-11T19:55:49Z",
          },
          timestamp: "2021-03-11T19:55:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "147945104n",
                memory: "103364Ki",
              },
            },
          ],
        },
        {
          metadata: {
            name: "testok3-5scqv",
            namespace: "default",
            selfLink: "/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/testok3-5scqv",
            creationTimestamp: "2021-03-11T19:55:59Z",
          },
          timestamp: "2021-03-11T19:55:42Z",
          window: "30s",
          containers: [
            {
              name: "hop",
              usage: {
                cpu: "147945104n",
                memory: "103364Ki",
              },
            },
          ],
        },
      ],
      logs:
        "2021/03/11 19:55:48 - HopRun - Enabling project 'workload'\n2021/03/11 19:56:01 - HopRun - Starting workflow: /opt/hop/slimhop/artifacts/workload.hwf\n2021/03/11 19:56:01 - workload - Start of workflow execution\n2021/03/11 19:56:02 - workload - Starting action [Pipeline]\n2021/03/11 19:56:02 - Pipeline - Using run configuration [local]\n2021/03/11 19:56:03 - workload - Executing this pipeline using the Local Pipeline Engine with run configuration 'local'\n2021/03/11 19:56:03 - workload - Execution started for pipeline [workload]\n2021/03/11 19:56:06 - Generate rows.0 - Finished processing (I=0, O=0, R=0, W=1000, U=0, E=0)\n2021/03/11 19:56:07 - Delay Row.0 - Finished processing (I=0, O=0, R=1000, W=1000, U=0, E=0)\n2021/03/11 19:56:07 - Write to log.0 - Finished processing (I=0, O=0, R=1000, W=1000, U=0, E=0)\n2021/03/11 19:56:07 - Dummy (do nothing).0 - Finished processing (I=0, O=0, R=1000, W=1000, U=0, E=0)\n2021/03/11 19:56:07 - workload - Pipeline duration : 4.006 seconds [  4.006\" ]\n2021/03/11 19:56:07 - workload - Execution finished on a local pipeline engine with run configuration 'local'\n2021/03/11 19:56:08 - workload - Starting action [Write to log]\n2021/03/11 19:56:08 - INFO:  - WORKLOAD: /opt/hop/slimhop/home/workload.hpl\n2021/03/11 19:56:08 - INFO:  - SENTENCE: Hello World!\n2021/03/11 19:56:08 - INFO:  - DELAY: 0\n2021/03/11 19:56:08 - INFO:  - LIMIT: 1000\n2021/03/11 19:56:08 - workload - Starting action [Success]\n2021/03/11 19:56:08 - workload - Finished action [Success] (result=[true])\n2021/03/11 19:56:08 - workload - Finished action [Write to log] (result=[true])\n2021/03/11 19:56:08 - workload - Finished action [Pipeline] (result=[true])\n2021/03/11 19:56:08 - workload - Workflow execution finished\n2021/03/11 19:56:08 - workload - Workflow duration : 7.299 seconds [  7.299\" ]\n",
      history: {
        status: {
          conditions: [
            {
              type: "Complete",
              status: "True",
              lastProbeTime: "2021-03-11T19:56:09Z",
              lastTransitionTime: "2021-03-11T19:56:09Z",
            },
          ],
          startTime: "2021-03-11T19:55:17Z",
          completionTime: "2021-03-11T19:56:09Z",
          succeeded: 1,
        },
        statusHistory: {
          phase: "Succeeded",
          conditions: [
            {
              type: "Initialized",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T19:55:17Z",
              reason: "PodCompleted",
            },
            {
              type: "Ready",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T19:56:09Z",
              reason: "PodCompleted",
            },
            {
              type: "ContainersReady",
              status: "False",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T19:56:09Z",
              reason: "PodCompleted",
            },
            {
              type: "PodScheduled",
              status: "True",
              lastProbeTime: null,
              lastTransitionTime: "2021-03-11T19:55:17Z",
            },
          ],
          hostIP: "172.18.0.2",
          podIP: "10.244.0.44",
          podIPs: [
            {
              ip: "10.244.0.44",
            },
          ],
          startTime: "2021-03-11T19:55:17Z",
          containerStatuses: [
            {
              name: "hop",
              state: {
                terminated: {
                  exitCode: 0,
                  reason: "Completed",
                  startedAt: "2021-03-11T19:55:18Z",
                  finishedAt: "2021-03-11T19:56:08Z",
                  containerID: "containerd://677ce4040d2582d4bc26d36abdaa08958e97722829100959ff725ddef38e01be",
                },
              },
              lastState: {},
              ready: false,
              restartCount: 0,
              image: "docker.io/meanify/slimhop:0.70",
              imageID: "docker.io/meanify/slimhop@sha256:48032154ac50eb1887c02c2f082443f20ddbc2e38a6ffb9e9a8e5a4b6c17c99a",
              containerID: "containerd://677ce4040d2582d4bc26d36abdaa08958e97722829100959ff725ddef38e01be",
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
