# API Reference

## Packages
- [robot.roboscale.io/v1alpha1](#robotroboscaleiov1alpha1)


## robot.roboscale.io/v1alpha1

Package v1alpha1 contains API Schema definitions for the robot v1alpha1 API group

### Resource Types
- [Robot](#robot)
- [RobotBuild](#robotbuild)
- [RobotClone](#robotclone)
- [RobotCloneList](#robotclonelist)
- [RobotConfig](#robotconfig)
- [RobotLaunch](#robotlaunch)
- [RobotRuntime](#robotruntime)
- [RobotTools](#robottools)
- [VDI](#vdi)



#### Artifacts





_Appears in:_
- [RobotSpec](#robotspec)

| Field | Description |
| --- | --- |
| `ros` _[ROS](#ros)_ |  |
| `rosContainer` _[ContainerArtifact](#containerartifact)_ |  |
| `cloudIDEContainer` _[ContainerArtifact](#containerartifact)_ |  |
| `trackerContainer` _[ContainerArtifact](#containerartifact)_ |  |
| `vdiContainer` _[ContainerArtifact](#containerartifact)_ |  |
| `nodeContainer` _[ContainerArtifact](#containerartifact)_ |  |
| `portRange` _[PortRange](#portrange)_ |  |


#### BuildStatus





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[RobotBuildStatus](#robotbuildstatus)_ |  |


#### BuilderImage

_Underlying type:_ `string`



_Appears in:_
- [ROS](#ros)



#### CloneJobStatus





_Appears in:_
- [RobotCloneStatus](#robotclonestatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[JobPhase](#jobphase)_ |  |


#### CloneStatus





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[RobotCloneStatus](#robotclonestatus)_ |  |


#### ConfigStatus





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[RobotConfigPhase](#robotconfigphase)_ |  |


#### Container





_Appears in:_
- [Node](#node)
- [VDIContainer](#vdicontainer)

| Field | Description |
| --- | --- |
| `name` _string_ |  |
| `phase` _[ContainerState](#containerstate)_ |  |


#### ContainerArtifact





_Appears in:_
- [Artifacts](#artifacts)

| Field | Description |
| --- | --- |
| `name` _string_ |  |
| `image` _string_ |  |
| `ports` _object (keys:string, values:[ContainerPort](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#containerport-v1-core))_ |  |
| `entrypoint` _string array_ |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#envvar-v1-core) array_ |  |


#### ContainerState

_Underlying type:_ `string`



_Appears in:_
- [Container](#container)



#### DesktopOption

_Underlying type:_ `string`



_Appears in:_
- [Neko](#neko)



#### DiscoveryServer





_Appears in:_
- [ROSSpecifications](#rosspecifications)

| Field | Description |
| --- | --- |
| `option` _DiscoveryServerOption_ |  |
| `guid` _string_ |  |
| `ip` _string_ |  |


#### Etc





_Appears in:_
- [ROSVolumes](#rosvolumes)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### Gazebo





_Appears in:_
- [Neko](#neko)

| Field | Description |
| --- | --- |
| `enabled` _boolean_ |  |
| `masterURI` _string_ |  |


#### JobPhase

_Underlying type:_ `string`



_Appears in:_
- [CloneJobStatus](#clonejobstatus)
- [LoaderJobStatus](#loaderjobstatus)
- [StepStatus](#stepstatus)



#### Launch





_Appears in:_
- [Repository](#repository)

| Field | Description |
| --- | --- |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#envvar-v1-core) array_ |  |
| `launchFilePath` _string_ |  |
| `prelaunch` _[Prelaunch](#prelaunch)_ |  |


#### LaunchPodStatus





_Appears in:_
- [RobotLaunchStatus](#robotlaunchstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[PodPhase](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#podphase-v1-core)_ |  |
| `ip` _string_ |  |


#### LaunchStatus





_Appears in:_
- [RobotRuntimeStatus](#robotruntimestatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[RobotLaunchStatus](#robotlaunchstatus)_ |  |


#### LoaderJobStatus





_Appears in:_
- [RobotConfigStatus](#robotconfigstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[JobPhase](#jobphase)_ |  |


#### Neko





_Appears in:_
- [VDIRequest](#vdirequest)
- [VDISpec](#vdispec)

| Field | Description |
| --- | --- |
| `ports` _[NekoPorts](#nekoports)_ |  |
| `desktop` _[DesktopOption](#desktopoption)_ |  |
| `gazebo` _[Gazebo](#gazebo)_ |  |
| `resources` _[NekoResources](#nekoresources)_ |  |


#### NekoPorts





_Appears in:_
- [Neko](#neko)

| Field | Description |
| --- | --- |
| `tcp` _integer_ |  |
| `udp` _integer_ |  |


#### NekoResources





_Appears in:_
- [Neko](#neko)

| Field | Description |
| --- | --- |
| `gpuCore` _integer_ |  |
| `cpu` _string_ |  |
| `memory` _string_ |  |


#### Node





_Appears in:_
- [NodeRequest](#noderequest)
- [NodeRequirements](#noderequirements)

| Field | Description |
| --- | --- |
| `nodeID` _string_ |  |
| `nodeType` _[NodeType](#nodetype)_ |  |
| `package` _string_ |  |
| `executable` _string_ |  |
| `index` _integer_ |  |
| `workspaceKey` _integer_ |  |
| `repositoryKey` _integer_ |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#envvar-v1-core) array_ |  |
| `container` _[Container](#container)_ |  |
| `activated` _boolean_ |  |


#### NodeRequest





_Appears in:_
- [RobotLaunchStatus](#robotlaunchstatus)

| Field | Description |
| --- | --- |
| `successful` _boolean_ |  |
| `nodes` _[Node](#node) array_ |  |






#### NodeType

_Underlying type:_ `string`



_Appears in:_
- [Node](#node)



#### Opt





_Appears in:_
- [ROSVolumes](#rosvolumes)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### PortRange





_Appears in:_
- [Artifacts](#artifacts)

| Field | Description |
| --- | --- |
| `maxCount` _integer_ |  |
| `rangeStart` _integer_ |  |


#### Prelaunch





_Appears in:_
- [Launch](#launch)

| Field | Description |
| --- | --- |
| `command` _string_ |  |


#### RBACStatus





_Appears in:_
- [RobotRuntimeStatus](#robotruntimestatus)

| Field | Description |
| --- | --- |
| `serviceAccount` _[ServiceAccount](#serviceaccount)_ |  |
| `role` _[Role](#role)_ |  |
| `roleBinding` _[RoleBinding](#rolebinding)_ |  |


#### ROS





_Appears in:_
- [Artifacts](#artifacts)

| Field | Description |
| --- | --- |
| `builderImage` _[BuilderImage](#builderimage)_ |  |
| `rosPackageManager` _[ROSPackageManager](#rospackagemanager)_ |  |


#### ROSPackageManager

_Underlying type:_ `string`



_Appears in:_
- [ROS](#ros)



#### ROSSpecifications





_Appears in:_
- [RobotBuildSpec](#robotbuildspec)
- [RobotCloneSpec](#robotclonespec)
- [RobotConfigSpec](#robotconfigspec)
- [RobotLaunchSpec](#robotlaunchspec)
- [RobotRuntimeSpec](#robotruntimespec)
- [RobotSpec](#robotspec)
- [RobotToolsSpec](#robottoolsspec)

| Field | Description |
| --- | --- |
| `distro` _ROSDistro_ |  |
| `resources` _[RobotResources](#robotresources)_ |  |
| `workspacesPath` _string_ |  |
| `workspaces` _[Workspace](#workspace) array_ |  |
| `state` _RobotState_ |  |
| `mode` _RobotMode_ |  |
| `discoveryServer` _[DiscoveryServer](#discoveryserver)_ |  |
| `clusterSelector` _string_ |  |
| `packageClusterSelection` _object (keys:string, values:string)_ |  |
| `cloudIDE` _CloudIDEOption_ |  |
| `vdi` _[VDIRequest](#vdirequest)_ |  |


#### ROSVolumes





_Appears in:_
- [VolumeStatuses](#volumestatuses)

| Field | Description |
| --- | --- |
| `var` _[Var](#var)_ |  |
| `opt` _[Opt](#opt)_ |  |
| `usr` _[Usr](#usr)_ |  |
| `etc` _[Etc](#etc)_ |  |


#### Repository





_Appears in:_
- [Workspace](#workspace)

| Field | Description |
| --- | --- |
| `name` _string_ |  |
| `url` _string_ |  |
| `branch` _string_ |  |
| `launch` _[Launch](#launch)_ |  |


#### Robot







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `Robot`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotSpec](#robotspec)_ |  |
| `status` _[RobotStatus](#robotstatus)_ |  |


#### RobotBuild







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotBuild`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotBuildSpec](#robotbuildspec)_ |  |
| `status` _[RobotBuildStatus](#robotbuildstatus)_ |  |


#### RobotBuildPhase

_Underlying type:_ `string`



_Appears in:_
- [RobotBuildStatus](#robotbuildstatus)



#### RobotBuildSpec





_Appears in:_
- [RobotBuild](#robotbuild)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |
| `steps` _[Step](#step) array_ |  |


#### RobotBuildStatus





_Appears in:_
- [BuildStatus](#buildstatus)
- [RobotBuild](#robotbuild)

| Field | Description |
| --- | --- |
| `scriptConfigMapStatus` _[ScriptConfigMapStatus](#scriptconfigmapstatus)_ |  |
| `steps` _object (keys:string, values:[StepStatus](#stepstatus))_ |  |
| `phase` _[RobotBuildPhase](#robotbuildphase)_ |  |


#### RobotClone





_Appears in:_
- [RobotCloneList](#robotclonelist)

| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotClone`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotCloneSpec](#robotclonespec)_ |  |
| `status` _[RobotCloneStatus](#robotclonestatus)_ |  |


#### RobotCloneList







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotCloneList`
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `items` _[RobotClone](#robotclone) array_ |  |


#### RobotClonePhase

_Underlying type:_ `string`



_Appears in:_
- [RobotCloneStatus](#robotclonestatus)



#### RobotCloneSpec





_Appears in:_
- [RobotClone](#robotclone)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |


#### RobotCloneStatus





_Appears in:_
- [CloneStatus](#clonestatus)
- [RobotClone](#robotclone)

| Field | Description |
| --- | --- |
| `workspaceStatus` _[WorkspaceStatus](#workspacestatus)_ |  |
| `cloneJobStatus` _[CloneJobStatus](#clonejobstatus)_ |  |
| `phase` _[RobotClonePhase](#robotclonephase)_ |  |


#### RobotConfig







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotConfig`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotConfigSpec](#robotconfigspec)_ |  |
| `status` _[RobotConfigStatus](#robotconfigstatus)_ |  |


#### RobotConfigPhase

_Underlying type:_ `string`



_Appears in:_
- [ConfigStatus](#configstatus)
- [RobotConfigStatus](#robotconfigstatus)



#### RobotConfigSpec





_Appears in:_
- [RobotConfig](#robotconfig)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |


#### RobotConfigStatus





_Appears in:_
- [RobotConfig](#robotconfig)

| Field | Description |
| --- | --- |
| `volumeStatuses` _[VolumeStatuses](#volumestatuses)_ |  |
| `loaderJobStatus` _[LoaderJobStatus](#loaderjobstatus)_ |  |
| `phase` _[RobotConfigPhase](#robotconfigphase)_ |  |


#### RobotLaunch







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotLaunch`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotLaunchSpec](#robotlaunchspec)_ |  |
| `status` _[RobotLaunchStatus](#robotlaunchstatus)_ |  |


#### RobotLaunchPhase

_Underlying type:_ `string`



_Appears in:_
- [RobotLaunchStatus](#robotlaunchstatus)



#### RobotLaunchSpec





_Appears in:_
- [RobotLaunch](#robotlaunch)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |
| `lastLaunchTimestamp` _string_ |  |
| `trackerInfo` _[TrackerInfo](#trackerinfo)_ |  |


#### RobotLaunchStatus





_Appears in:_
- [LaunchStatus](#launchstatus)
- [RobotLaunch](#robotlaunch)

| Field | Description |
| --- | --- |
| `launchPodStatus` _[LaunchPodStatus](#launchpodstatus)_ |  |
| `lastLaunchTimestamp` _string_ |  |
| `nodeRequest` _[NodeRequest](#noderequest)_ |  |
| `cluster` _string_ |  |
| `phase` _[RobotLaunchPhase](#robotlaunchphase)_ |  |


#### RobotResources





_Appears in:_
- [ROSSpecifications](#rosspecifications)

| Field | Description |
| --- | --- |
| `cpuPerContainer` _string_ |  |
| `memoryPerContainer` _string_ |  |
| `storage` _integer_ |  |


#### RobotRuntime







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotRuntime`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotRuntimeSpec](#robotruntimespec)_ |  |
| `status` _[RobotRuntimeStatus](#robotruntimestatus)_ |  |


#### RobotRuntimePhase

_Underlying type:_ `string`



_Appears in:_
- [RobotRuntimeStatus](#robotruntimestatus)



#### RobotRuntimeSpec





_Appears in:_
- [RobotRuntime](#robotruntime)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |


#### RobotRuntimeStatus





_Appears in:_
- [RobotRuntime](#robotruntime)
- [RuntimeStatus](#runtimestatus)

| Field | Description |
| --- | --- |
| `rbacStatus` _[RBACStatus](#rbacstatus)_ |  |
| `launchStatus` _[LaunchStatus](#launchstatus)_ |  |
| `phase` _[RobotRuntimePhase](#robotruntimephase)_ |  |


#### RobotSpec





_Appears in:_
- [Robot](#robot)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |
| `artifacts` _[Artifacts](#artifacts)_ |  |


#### RobotStatus





_Appears in:_
- [Robot](#robot)

| Field | Description |
| --- | --- |
| `configStatus` _[ConfigStatus](#configstatus)_ |  |
| `cloneStatus` _[CloneStatus](#clonestatus)_ |  |
| `buildStatus` _[BuildStatus](#buildstatus)_ |  |
| `toolsStatus` _[ToolsStatus](#toolsstatus)_ |  |
| `runtimeStatus` _[RuntimeStatus](#runtimestatus)_ |  |
| `vdiStatus` _[VDIStatusForRobot](#vdistatusforrobot)_ |  |


#### RobotTools







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `RobotTools`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[RobotToolsSpec](#robottoolsspec)_ |  |
| `status` _[RobotToolsStatus](#robottoolsstatus)_ |  |


#### RobotToolsPhase

_Underlying type:_ `string`



_Appears in:_
- [RobotToolsStatus](#robottoolsstatus)



#### RobotToolsSpec





_Appears in:_
- [RobotTools](#robottools)

| Field | Description |
| --- | --- |
| `ros` _[ROSSpecifications](#rosspecifications)_ |  |


#### RobotToolsStatus





_Appears in:_
- [RobotTools](#robottools)
- [ToolsStatus](#toolsstatus)

| Field | Description |
| --- | --- |
| `toolsPodStatus` _[ToolsPodStatus](#toolspodstatus)_ |  |
| `toolsServiceStatus` _[ToolsServiceStatus](#toolsservicestatus)_ |  |
| `phase` _[RobotToolsPhase](#robottoolsphase)_ |  |


#### Role





_Appears in:_
- [RBACStatus](#rbacstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### RoleBinding





_Appears in:_
- [RBACStatus](#rbacstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### RuntimeStatus





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[RobotRuntimeStatus](#robotruntimestatus)_ |  |


#### ScriptConfigMapStatus





_Appears in:_
- [RobotBuildStatus](#robotbuildstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### ServiceAccount





_Appears in:_
- [RBACStatus](#rbacstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### Step





_Appears in:_
- [RobotBuildSpec](#robotbuildspec)
- [StepStatus](#stepstatus)
- [Workspace](#workspace)

| Field | Description |
| --- | --- |
| `name` _string_ |  |
| `command` _string_ |  |
| `script` _string_ |  |


#### StepStatus





_Appears in:_
- [RobotBuildStatus](#robotbuildstatus)

| Field | Description |
| --- | --- |
| `step` _[Step](#step)_ |  |
| `jobName` _string_ |  |
| `created` _boolean_ |  |
| `jobPhase` _[JobPhase](#jobphase)_ |  |


#### ToolsPodStatus





_Appears in:_
- [RobotToolsStatus](#robottoolsstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[PodPhase](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#podphase-v1-core)_ |  |
| `ip` _string_ |  |


#### ToolsServiceStatus





_Appears in:_
- [RobotToolsStatus](#robottoolsstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### ToolsStatus





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[RobotToolsStatus](#robottoolsstatus)_ |  |


#### TrackerInfo





_Appears in:_
- [RobotLaunchSpec](#robotlaunchspec)

| Field | Description |
| --- | --- |
| `ip` _string_ |  |
| `port` _string_ |  |


#### Usr





_Appears in:_
- [ROSVolumes](#rosvolumes)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### VDI







| Field | Description |
| --- | --- |
| `apiVersion` _string_ | `robot.roboscale.io/v1alpha1`
| `kind` _string_ | `VDI`
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |
| `spec` _[VDISpec](#vdispec)_ |  |
| `status` _[VDIStatus](#vdistatus)_ |  |


#### VDIContainer





_Appears in:_
- [VDIPodStatus](#vdipodstatus)

| Field | Description |
| --- | --- |
| `status` _[Container](#container)_ |  |
| `pebbleServiceStatuses` _ServiceInfo array_ |  |


#### VDIPodStatus





_Appears in:_
- [VDIStatus](#vdistatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `phase` _[PodPhase](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#podphase-v1-core)_ |  |
| `ip` _string_ |  |
| `containers` _object (keys:string, values:[VDIContainer](#vdicontainer))_ |  |


#### VDIRequest





_Appears in:_
- [ROSSpecifications](#rosspecifications)

| Field | Description |
| --- | --- |
| `option` _VDIOption_ |  |
| `neko` _[Neko](#neko)_ |  |


#### VDIServiceStatus





_Appears in:_
- [VDIStatus](#vdistatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### VDISpec





_Appears in:_
- [VDI](#vdi)

| Field | Description |
| --- | --- |
| `neko` _[Neko](#neko)_ |  |


#### VDIStatus





_Appears in:_
- [VDI](#vdi)
- [VDIStatusForRobot](#vdistatusforrobot)

| Field | Description |
| --- | --- |
| `vdiPodStatus` _[VDIPodStatus](#vdipodstatus)_ |  |
| `vdiServiceStatus` _[VDIServiceStatus](#vdiservicestatus)_ |  |


#### VDIStatusForRobot





_Appears in:_
- [RobotStatus](#robotstatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |
| `status` _[VDIStatus](#vdistatus)_ |  |


#### Var





_Appears in:_
- [ROSVolumes](#rosvolumes)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


#### VolumeStatuses





_Appears in:_
- [RobotConfigStatus](#robotconfigstatus)

| Field | Description |
| --- | --- |
| `ros` _[ROSVolumes](#rosvolumes)_ |  |


#### Workspace





_Appears in:_
- [ROSSpecifications](#rosspecifications)

| Field | Description |
| --- | --- |
| `name` _string_ |  |
| `subPath` _string_ |  |
| `repositories` _[Repository](#repository) array_ |  |
| `build` _WorkspaceBuildType_ |  |
| `buildSteps` _[Step](#step) array_ |  |


#### WorkspaceStatus





_Appears in:_
- [RobotCloneStatus](#robotclonestatus)

| Field | Description |
| --- | --- |
| `created` _boolean_ |  |


