import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class WorkMail extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkMail.Types.ClientConfiguration)
  config: Config & WorkMail.Types.ClientConfiguration;
  /**
   * Adds a member (user or group) to the resource's set of delegates.
   */
  associateDelegateToResource(params: WorkMail.Types.AssociateDelegateToResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.AssociateDelegateToResourceResponse) => void): Request<WorkMail.Types.AssociateDelegateToResourceResponse, AWSError>;
  /**
   * Adds a member (user or group) to the resource's set of delegates.
   */
  associateDelegateToResource(callback?: (err: AWSError, data: WorkMail.Types.AssociateDelegateToResourceResponse) => void): Request<WorkMail.Types.AssociateDelegateToResourceResponse, AWSError>;
  /**
   * Adds a member (user or group) to the group's set.
   */
  associateMemberToGroup(params: WorkMail.Types.AssociateMemberToGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.AssociateMemberToGroupResponse) => void): Request<WorkMail.Types.AssociateMemberToGroupResponse, AWSError>;
  /**
   * Adds a member (user or group) to the group's set.
   */
  associateMemberToGroup(callback?: (err: AWSError, data: WorkMail.Types.AssociateMemberToGroupResponse) => void): Request<WorkMail.Types.AssociateMemberToGroupResponse, AWSError>;
  /**
   * Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
   */
  assumeImpersonationRole(params: WorkMail.Types.AssumeImpersonationRoleRequest, callback?: (err: AWSError, data: WorkMail.Types.AssumeImpersonationRoleResponse) => void): Request<WorkMail.Types.AssumeImpersonationRoleResponse, AWSError>;
  /**
   * Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
   */
  assumeImpersonationRole(callback?: (err: AWSError, data: WorkMail.Types.AssumeImpersonationRoleResponse) => void): Request<WorkMail.Types.AssumeImpersonationRoleResponse, AWSError>;
  /**
   * Cancels a mailbox export job.  If the mailbox export job is near completion, it might not be possible to cancel it. 
   */
  cancelMailboxExportJob(params: WorkMail.Types.CancelMailboxExportJobRequest, callback?: (err: AWSError, data: WorkMail.Types.CancelMailboxExportJobResponse) => void): Request<WorkMail.Types.CancelMailboxExportJobResponse, AWSError>;
  /**
   * Cancels a mailbox export job.  If the mailbox export job is near completion, it might not be possible to cancel it. 
   */
  cancelMailboxExportJob(callback?: (err: AWSError, data: WorkMail.Types.CancelMailboxExportJobResponse) => void): Request<WorkMail.Types.CancelMailboxExportJobResponse, AWSError>;
  /**
   * Adds an alias to the set of a given member (user or group) of WorkMail.
   */
  createAlias(params: WorkMail.Types.CreateAliasRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateAliasResponse) => void): Request<WorkMail.Types.CreateAliasResponse, AWSError>;
  /**
   * Adds an alias to the set of a given member (user or group) of WorkMail.
   */
  createAlias(callback?: (err: AWSError, data: WorkMail.Types.CreateAliasResponse) => void): Request<WorkMail.Types.CreateAliasResponse, AWSError>;
  /**
   * Creates an AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  createAvailabilityConfiguration(params: WorkMail.Types.CreateAvailabilityConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.CreateAvailabilityConfigurationResponse, AWSError>;
  /**
   * Creates an AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  createAvailabilityConfiguration(callback?: (err: AWSError, data: WorkMail.Types.CreateAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.CreateAvailabilityConfigurationResponse, AWSError>;
  /**
   * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
   */
  createGroup(params: WorkMail.Types.CreateGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateGroupResponse) => void): Request<WorkMail.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation.
   */
  createGroup(callback?: (err: AWSError, data: WorkMail.Types.CreateGroupResponse) => void): Request<WorkMail.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates an impersonation role for the given WorkMail organization.  Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.
   */
  createImpersonationRole(params: WorkMail.Types.CreateImpersonationRoleRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateImpersonationRoleResponse) => void): Request<WorkMail.Types.CreateImpersonationRoleResponse, AWSError>;
  /**
   * Creates an impersonation role for the given WorkMail organization.  Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.
   */
  createImpersonationRole(callback?: (err: AWSError, data: WorkMail.Types.CreateImpersonationRoleResponse) => void): Request<WorkMail.Types.CreateImpersonationRoleResponse, AWSError>;
  /**
   * Creates a new mobile device access rule for the specified WorkMail organization.
   */
  createMobileDeviceAccessRule(params: WorkMail.Types.CreateMobileDeviceAccessRuleRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.CreateMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Creates a new mobile device access rule for the specified WorkMail organization.
   */
  createMobileDeviceAccessRule(callback?: (err: AWSError, data: WorkMail.Types.CreateMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.CreateMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the WorkMail Administrator Guide. You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see Adding a domain and Choosing the default domain in the WorkMail Administrator Guide. Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.
   */
  createOrganization(params: WorkMail.Types.CreateOrganizationRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateOrganizationResponse) => void): Request<WorkMail.Types.CreateOrganizationResponse, AWSError>;
  /**
   * Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the WorkMail Administrator Guide. You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see Adding a domain and Choosing the default domain in the WorkMail Administrator Guide. Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.
   */
  createOrganization(callback?: (err: AWSError, data: WorkMail.Types.CreateOrganizationResponse) => void): Request<WorkMail.Types.CreateOrganizationResponse, AWSError>;
  /**
   * Creates a new WorkMail resource.
   */
  createResource(params: WorkMail.Types.CreateResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateResourceResponse) => void): Request<WorkMail.Types.CreateResourceResponse, AWSError>;
  /**
   * Creates a new WorkMail resource.
   */
  createResource(callback?: (err: AWSError, data: WorkMail.Types.CreateResourceResponse) => void): Request<WorkMail.Types.CreateResourceResponse, AWSError>;
  /**
   * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
   */
  createUser(params: WorkMail.Types.CreateUserRequest, callback?: (err: AWSError, data: WorkMail.Types.CreateUserResponse) => void): Request<WorkMail.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
   */
  createUser(callback?: (err: AWSError, data: WorkMail.Types.CreateUserResponse) => void): Request<WorkMail.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes an access control rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteAccessControlRule(params: WorkMail.Types.DeleteAccessControlRuleRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteAccessControlRuleResponse) => void): Request<WorkMail.Types.DeleteAccessControlRuleResponse, AWSError>;
  /**
   * Deletes an access control rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteAccessControlRule(callback?: (err: AWSError, data: WorkMail.Types.DeleteAccessControlRuleResponse) => void): Request<WorkMail.Types.DeleteAccessControlRuleResponse, AWSError>;
  /**
   * Remove one or more specified aliases from a set of aliases for a given user.
   */
  deleteAlias(params: WorkMail.Types.DeleteAliasRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteAliasResponse) => void): Request<WorkMail.Types.DeleteAliasResponse, AWSError>;
  /**
   * Remove one or more specified aliases from a set of aliases for a given user.
   */
  deleteAlias(callback?: (err: AWSError, data: WorkMail.Types.DeleteAliasResponse) => void): Request<WorkMail.Types.DeleteAliasResponse, AWSError>;
  /**
   * Deletes the AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  deleteAvailabilityConfiguration(params: WorkMail.Types.DeleteAvailabilityConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.DeleteAvailabilityConfigurationResponse, AWSError>;
  /**
   * Deletes the AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  deleteAvailabilityConfiguration(callback?: (err: AWSError, data: WorkMail.Types.DeleteAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.DeleteAvailabilityConfigurationResponse, AWSError>;
  /**
   * Deletes the email monitoring configuration for a specified organization.
   */
  deleteEmailMonitoringConfiguration(params: WorkMail.Types.DeleteEmailMonitoringConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.DeleteEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Deletes the email monitoring configuration for a specified organization.
   */
  deleteEmailMonitoringConfiguration(callback?: (err: AWSError, data: WorkMail.Types.DeleteEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.DeleteEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Deletes a group from WorkMail.
   */
  deleteGroup(params: WorkMail.Types.DeleteGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteGroupResponse) => void): Request<WorkMail.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes a group from WorkMail.
   */
  deleteGroup(callback?: (err: AWSError, data: WorkMail.Types.DeleteGroupResponse) => void): Request<WorkMail.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes an impersonation role for the given WorkMail organization.
   */
  deleteImpersonationRole(params: WorkMail.Types.DeleteImpersonationRoleRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteImpersonationRoleResponse) => void): Request<WorkMail.Types.DeleteImpersonationRoleResponse, AWSError>;
  /**
   * Deletes an impersonation role for the given WorkMail organization.
   */
  deleteImpersonationRole(callback?: (err: AWSError, data: WorkMail.Types.DeleteImpersonationRoleResponse) => void): Request<WorkMail.Types.DeleteImpersonationRoleResponse, AWSError>;
  /**
   * Deletes permissions granted to a member (user or group).
   */
  deleteMailboxPermissions(params: WorkMail.Types.DeleteMailboxPermissionsRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteMailboxPermissionsResponse) => void): Request<WorkMail.Types.DeleteMailboxPermissionsResponse, AWSError>;
  /**
   * Deletes permissions granted to a member (user or group).
   */
  deleteMailboxPermissions(callback?: (err: AWSError, data: WorkMail.Types.DeleteMailboxPermissionsResponse) => void): Request<WorkMail.Types.DeleteMailboxPermissionsResponse, AWSError>;
  /**
   * Deletes the mobile device access override for the given WorkMail organization, user, and device.  Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteMobileDeviceAccessOverride(params: WorkMail.Types.DeleteMobileDeviceAccessOverrideRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.DeleteMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Deletes the mobile device access override for the given WorkMail organization, user, and device.  Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteMobileDeviceAccessOverride(callback?: (err: AWSError, data: WorkMail.Types.DeleteMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.DeleteMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Deletes a mobile device access rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteMobileDeviceAccessRule(params: WorkMail.Types.DeleteMobileDeviceAccessRuleRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.DeleteMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Deletes a mobile device access rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  deleteMobileDeviceAccessRule(callback?: (err: AWSError, data: WorkMail.Types.DeleteMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.DeleteMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the WorkMail Administrator Guide.
   */
  deleteOrganization(params: WorkMail.Types.DeleteOrganizationRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteOrganizationResponse) => void): Request<WorkMail.Types.DeleteOrganizationResponse, AWSError>;
  /**
   * Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the WorkMail Administrator Guide.
   */
  deleteOrganization(callback?: (err: AWSError, data: WorkMail.Types.DeleteOrganizationResponse) => void): Request<WorkMail.Types.DeleteOrganizationResponse, AWSError>;
  /**
   * Deletes the specified resource.
   */
  deleteResource(params: WorkMail.Types.DeleteResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteResourceResponse) => void): Request<WorkMail.Types.DeleteResourceResponse, AWSError>;
  /**
   * Deletes the specified resource.
   */
  deleteResource(callback?: (err: AWSError, data: WorkMail.Types.DeleteResourceResponse) => void): Request<WorkMail.Types.DeleteResourceResponse, AWSError>;
  /**
   * Deletes the specified retention policy from the specified organization.
   */
  deleteRetentionPolicy(params: WorkMail.Types.DeleteRetentionPolicyRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteRetentionPolicyResponse) => void): Request<WorkMail.Types.DeleteRetentionPolicyResponse, AWSError>;
  /**
   * Deletes the specified retention policy from the specified organization.
   */
  deleteRetentionPolicy(callback?: (err: AWSError, data: WorkMail.Types.DeleteRetentionPolicyResponse) => void): Request<WorkMail.Types.DeleteRetentionPolicyResponse, AWSError>;
  /**
   * Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED. Use the DescribeUser action to confirm the user state. Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.
   */
  deleteUser(params: WorkMail.Types.DeleteUserRequest, callback?: (err: AWSError, data: WorkMail.Types.DeleteUserResponse) => void): Request<WorkMail.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED. Use the DescribeUser action to confirm the user state. Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.
   */
  deleteUser(callback?: (err: AWSError, data: WorkMail.Types.DeleteUserResponse) => void): Request<WorkMail.Types.DeleteUserResponse, AWSError>;
  /**
   * Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable.
   */
  deregisterFromWorkMail(params: WorkMail.Types.DeregisterFromWorkMailRequest, callback?: (err: AWSError, data: WorkMail.Types.DeregisterFromWorkMailResponse) => void): Request<WorkMail.Types.DeregisterFromWorkMailResponse, AWSError>;
  /**
   * Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable.
   */
  deregisterFromWorkMail(callback?: (err: AWSError, data: WorkMail.Types.DeregisterFromWorkMailResponse) => void): Request<WorkMail.Types.DeregisterFromWorkMailResponse, AWSError>;
  /**
   * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
   */
  deregisterMailDomain(params: WorkMail.Types.DeregisterMailDomainRequest, callback?: (err: AWSError, data: WorkMail.Types.DeregisterMailDomainResponse) => void): Request<WorkMail.Types.DeregisterMailDomainResponse, AWSError>;
  /**
   * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
   */
  deregisterMailDomain(callback?: (err: AWSError, data: WorkMail.Types.DeregisterMailDomainResponse) => void): Request<WorkMail.Types.DeregisterMailDomainResponse, AWSError>;
  /**
   * Describes the current email monitoring configuration for a specified organization.
   */
  describeEmailMonitoringConfiguration(params: WorkMail.Types.DescribeEmailMonitoringConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.DescribeEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Describes the current email monitoring configuration for a specified organization.
   */
  describeEmailMonitoringConfiguration(callback?: (err: AWSError, data: WorkMail.Types.DescribeEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.DescribeEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Returns basic details about an entity in WorkMail. 
   */
  describeEntity(params: WorkMail.Types.DescribeEntityRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeEntityResponse) => void): Request<WorkMail.Types.DescribeEntityResponse, AWSError>;
  /**
   * Returns basic details about an entity in WorkMail. 
   */
  describeEntity(callback?: (err: AWSError, data: WorkMail.Types.DescribeEntityResponse) => void): Request<WorkMail.Types.DescribeEntityResponse, AWSError>;
  /**
   * Returns the data available for the group.
   */
  describeGroup(params: WorkMail.Types.DescribeGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeGroupResponse) => void): Request<WorkMail.Types.DescribeGroupResponse, AWSError>;
  /**
   * Returns the data available for the group.
   */
  describeGroup(callback?: (err: AWSError, data: WorkMail.Types.DescribeGroupResponse) => void): Request<WorkMail.Types.DescribeGroupResponse, AWSError>;
  /**
   * Lists the settings in a DMARC policy for a specified organization.
   */
  describeInboundDmarcSettings(params: WorkMail.Types.DescribeInboundDmarcSettingsRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeInboundDmarcSettingsResponse) => void): Request<WorkMail.Types.DescribeInboundDmarcSettingsResponse, AWSError>;
  /**
   * Lists the settings in a DMARC policy for a specified organization.
   */
  describeInboundDmarcSettings(callback?: (err: AWSError, data: WorkMail.Types.DescribeInboundDmarcSettingsResponse) => void): Request<WorkMail.Types.DescribeInboundDmarcSettingsResponse, AWSError>;
  /**
   * Describes the current status of a mailbox export job.
   */
  describeMailboxExportJob(params: WorkMail.Types.DescribeMailboxExportJobRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeMailboxExportJobResponse) => void): Request<WorkMail.Types.DescribeMailboxExportJobResponse, AWSError>;
  /**
   * Describes the current status of a mailbox export job.
   */
  describeMailboxExportJob(callback?: (err: AWSError, data: WorkMail.Types.DescribeMailboxExportJobResponse) => void): Request<WorkMail.Types.DescribeMailboxExportJobResponse, AWSError>;
  /**
   * Provides more information regarding a given organization based on its identifier.
   */
  describeOrganization(params: WorkMail.Types.DescribeOrganizationRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeOrganizationResponse) => void): Request<WorkMail.Types.DescribeOrganizationResponse, AWSError>;
  /**
   * Provides more information regarding a given organization based on its identifier.
   */
  describeOrganization(callback?: (err: AWSError, data: WorkMail.Types.DescribeOrganizationResponse) => void): Request<WorkMail.Types.DescribeOrganizationResponse, AWSError>;
  /**
   * Returns the data available for the resource.
   */
  describeResource(params: WorkMail.Types.DescribeResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeResourceResponse) => void): Request<WorkMail.Types.DescribeResourceResponse, AWSError>;
  /**
   * Returns the data available for the resource.
   */
  describeResource(callback?: (err: AWSError, data: WorkMail.Types.DescribeResourceResponse) => void): Request<WorkMail.Types.DescribeResourceResponse, AWSError>;
  /**
   * Provides information regarding the user.
   */
  describeUser(params: WorkMail.Types.DescribeUserRequest, callback?: (err: AWSError, data: WorkMail.Types.DescribeUserResponse) => void): Request<WorkMail.Types.DescribeUserResponse, AWSError>;
  /**
   * Provides information regarding the user.
   */
  describeUser(callback?: (err: AWSError, data: WorkMail.Types.DescribeUserResponse) => void): Request<WorkMail.Types.DescribeUserResponse, AWSError>;
  /**
   * Removes a member from the resource's set of delegates.
   */
  disassociateDelegateFromResource(params: WorkMail.Types.DisassociateDelegateFromResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.DisassociateDelegateFromResourceResponse) => void): Request<WorkMail.Types.DisassociateDelegateFromResourceResponse, AWSError>;
  /**
   * Removes a member from the resource's set of delegates.
   */
  disassociateDelegateFromResource(callback?: (err: AWSError, data: WorkMail.Types.DisassociateDelegateFromResourceResponse) => void): Request<WorkMail.Types.DisassociateDelegateFromResourceResponse, AWSError>;
  /**
   * Removes a member from a group.
   */
  disassociateMemberFromGroup(params: WorkMail.Types.DisassociateMemberFromGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.DisassociateMemberFromGroupResponse) => void): Request<WorkMail.Types.DisassociateMemberFromGroupResponse, AWSError>;
  /**
   * Removes a member from a group.
   */
  disassociateMemberFromGroup(callback?: (err: AWSError, data: WorkMail.Types.DisassociateMemberFromGroupResponse) => void): Request<WorkMail.Types.DisassociateMemberFromGroupResponse, AWSError>;
  /**
   * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
   */
  getAccessControlEffect(params: WorkMail.Types.GetAccessControlEffectRequest, callback?: (err: AWSError, data: WorkMail.Types.GetAccessControlEffectResponse) => void): Request<WorkMail.Types.GetAccessControlEffectResponse, AWSError>;
  /**
   * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
   */
  getAccessControlEffect(callback?: (err: AWSError, data: WorkMail.Types.GetAccessControlEffectResponse) => void): Request<WorkMail.Types.GetAccessControlEffectResponse, AWSError>;
  /**
   * Gets the default retention policy details for the specified organization.
   */
  getDefaultRetentionPolicy(params: WorkMail.Types.GetDefaultRetentionPolicyRequest, callback?: (err: AWSError, data: WorkMail.Types.GetDefaultRetentionPolicyResponse) => void): Request<WorkMail.Types.GetDefaultRetentionPolicyResponse, AWSError>;
  /**
   * Gets the default retention policy details for the specified organization.
   */
  getDefaultRetentionPolicy(callback?: (err: AWSError, data: WorkMail.Types.GetDefaultRetentionPolicyResponse) => void): Request<WorkMail.Types.GetDefaultRetentionPolicyResponse, AWSError>;
  /**
   * Gets the impersonation role details for the given WorkMail organization.
   */
  getImpersonationRole(params: WorkMail.Types.GetImpersonationRoleRequest, callback?: (err: AWSError, data: WorkMail.Types.GetImpersonationRoleResponse) => void): Request<WorkMail.Types.GetImpersonationRoleResponse, AWSError>;
  /**
   * Gets the impersonation role details for the given WorkMail organization.
   */
  getImpersonationRole(callback?: (err: AWSError, data: WorkMail.Types.GetImpersonationRoleResponse) => void): Request<WorkMail.Types.GetImpersonationRoleResponse, AWSError>;
  /**
   * Tests whether the given impersonation role can impersonate a target user.
   */
  getImpersonationRoleEffect(params: WorkMail.Types.GetImpersonationRoleEffectRequest, callback?: (err: AWSError, data: WorkMail.Types.GetImpersonationRoleEffectResponse) => void): Request<WorkMail.Types.GetImpersonationRoleEffectResponse, AWSError>;
  /**
   * Tests whether the given impersonation role can impersonate a target user.
   */
  getImpersonationRoleEffect(callback?: (err: AWSError, data: WorkMail.Types.GetImpersonationRoleEffectResponse) => void): Request<WorkMail.Types.GetImpersonationRoleEffectResponse, AWSError>;
  /**
   * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
   */
  getMailDomain(params: WorkMail.Types.GetMailDomainRequest, callback?: (err: AWSError, data: WorkMail.Types.GetMailDomainResponse) => void): Request<WorkMail.Types.GetMailDomainResponse, AWSError>;
  /**
   * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
   */
  getMailDomain(callback?: (err: AWSError, data: WorkMail.Types.GetMailDomainResponse) => void): Request<WorkMail.Types.GetMailDomainResponse, AWSError>;
  /**
   * Requests a user's mailbox details for a specified organization and user.
   */
  getMailboxDetails(params: WorkMail.Types.GetMailboxDetailsRequest, callback?: (err: AWSError, data: WorkMail.Types.GetMailboxDetailsResponse) => void): Request<WorkMail.Types.GetMailboxDetailsResponse, AWSError>;
  /**
   * Requests a user's mailbox details for a specified organization and user.
   */
  getMailboxDetails(callback?: (err: AWSError, data: WorkMail.Types.GetMailboxDetailsResponse) => void): Request<WorkMail.Types.GetMailboxDetailsResponse, AWSError>;
  /**
   * Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
   */
  getMobileDeviceAccessEffect(params: WorkMail.Types.GetMobileDeviceAccessEffectRequest, callback?: (err: AWSError, data: WorkMail.Types.GetMobileDeviceAccessEffectResponse) => void): Request<WorkMail.Types.GetMobileDeviceAccessEffectResponse, AWSError>;
  /**
   * Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
   */
  getMobileDeviceAccessEffect(callback?: (err: AWSError, data: WorkMail.Types.GetMobileDeviceAccessEffectResponse) => void): Request<WorkMail.Types.GetMobileDeviceAccessEffectResponse, AWSError>;
  /**
   * Gets the mobile device access override for the given WorkMail organization, user, and device.
   */
  getMobileDeviceAccessOverride(params: WorkMail.Types.GetMobileDeviceAccessOverrideRequest, callback?: (err: AWSError, data: WorkMail.Types.GetMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.GetMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Gets the mobile device access override for the given WorkMail organization, user, and device.
   */
  getMobileDeviceAccessOverride(callback?: (err: AWSError, data: WorkMail.Types.GetMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.GetMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Lists the access control rules for the specified organization.
   */
  listAccessControlRules(params: WorkMail.Types.ListAccessControlRulesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListAccessControlRulesResponse) => void): Request<WorkMail.Types.ListAccessControlRulesResponse, AWSError>;
  /**
   * Lists the access control rules for the specified organization.
   */
  listAccessControlRules(callback?: (err: AWSError, data: WorkMail.Types.ListAccessControlRulesResponse) => void): Request<WorkMail.Types.ListAccessControlRulesResponse, AWSError>;
  /**
   * Creates a paginated call to list the aliases associated with a given entity.
   */
  listAliases(params: WorkMail.Types.ListAliasesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListAliasesResponse) => void): Request<WorkMail.Types.ListAliasesResponse, AWSError>;
  /**
   * Creates a paginated call to list the aliases associated with a given entity.
   */
  listAliases(callback?: (err: AWSError, data: WorkMail.Types.ListAliasesResponse) => void): Request<WorkMail.Types.ListAliasesResponse, AWSError>;
  /**
   * List all the AvailabilityConfiguration's for the given WorkMail organization.
   */
  listAvailabilityConfigurations(params: WorkMail.Types.ListAvailabilityConfigurationsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListAvailabilityConfigurationsResponse) => void): Request<WorkMail.Types.ListAvailabilityConfigurationsResponse, AWSError>;
  /**
   * List all the AvailabilityConfiguration's for the given WorkMail organization.
   */
  listAvailabilityConfigurations(callback?: (err: AWSError, data: WorkMail.Types.ListAvailabilityConfigurationsResponse) => void): Request<WorkMail.Types.ListAvailabilityConfigurationsResponse, AWSError>;
  /**
   * Returns an overview of the members of a group. Users and groups can be members of a group.
   */
  listGroupMembers(params: WorkMail.Types.ListGroupMembersRequest, callback?: (err: AWSError, data: WorkMail.Types.ListGroupMembersResponse) => void): Request<WorkMail.Types.ListGroupMembersResponse, AWSError>;
  /**
   * Returns an overview of the members of a group. Users and groups can be members of a group.
   */
  listGroupMembers(callback?: (err: AWSError, data: WorkMail.Types.ListGroupMembersResponse) => void): Request<WorkMail.Types.ListGroupMembersResponse, AWSError>;
  /**
   * Returns summaries of the organization's groups.
   */
  listGroups(params: WorkMail.Types.ListGroupsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListGroupsResponse) => void): Request<WorkMail.Types.ListGroupsResponse, AWSError>;
  /**
   * Returns summaries of the organization's groups.
   */
  listGroups(callback?: (err: AWSError, data: WorkMail.Types.ListGroupsResponse) => void): Request<WorkMail.Types.ListGroupsResponse, AWSError>;
  /**
   * Returns all the groups to which an entity belongs.
   */
  listGroupsForEntity(params: WorkMail.Types.ListGroupsForEntityRequest, callback?: (err: AWSError, data: WorkMail.Types.ListGroupsForEntityResponse) => void): Request<WorkMail.Types.ListGroupsForEntityResponse, AWSError>;
  /**
   * Returns all the groups to which an entity belongs.
   */
  listGroupsForEntity(callback?: (err: AWSError, data: WorkMail.Types.ListGroupsForEntityResponse) => void): Request<WorkMail.Types.ListGroupsForEntityResponse, AWSError>;
  /**
   * Lists all the impersonation roles for the given WorkMail organization.
   */
  listImpersonationRoles(params: WorkMail.Types.ListImpersonationRolesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListImpersonationRolesResponse) => void): Request<WorkMail.Types.ListImpersonationRolesResponse, AWSError>;
  /**
   * Lists all the impersonation roles for the given WorkMail organization.
   */
  listImpersonationRoles(callback?: (err: AWSError, data: WorkMail.Types.ListImpersonationRolesResponse) => void): Request<WorkMail.Types.ListImpersonationRolesResponse, AWSError>;
  /**
   * Lists the mail domains in a given WorkMail organization.
   */
  listMailDomains(params: WorkMail.Types.ListMailDomainsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListMailDomainsResponse) => void): Request<WorkMail.Types.ListMailDomainsResponse, AWSError>;
  /**
   * Lists the mail domains in a given WorkMail organization.
   */
  listMailDomains(callback?: (err: AWSError, data: WorkMail.Types.ListMailDomainsResponse) => void): Request<WorkMail.Types.ListMailDomainsResponse, AWSError>;
  /**
   * Lists the mailbox export jobs started for the specified organization within the last seven days.
   */
  listMailboxExportJobs(params: WorkMail.Types.ListMailboxExportJobsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListMailboxExportJobsResponse) => void): Request<WorkMail.Types.ListMailboxExportJobsResponse, AWSError>;
  /**
   * Lists the mailbox export jobs started for the specified organization within the last seven days.
   */
  listMailboxExportJobs(callback?: (err: AWSError, data: WorkMail.Types.ListMailboxExportJobsResponse) => void): Request<WorkMail.Types.ListMailboxExportJobsResponse, AWSError>;
  /**
   * Lists the mailbox permissions associated with a user, group, or resource mailbox.
   */
  listMailboxPermissions(params: WorkMail.Types.ListMailboxPermissionsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListMailboxPermissionsResponse) => void): Request<WorkMail.Types.ListMailboxPermissionsResponse, AWSError>;
  /**
   * Lists the mailbox permissions associated with a user, group, or resource mailbox.
   */
  listMailboxPermissions(callback?: (err: AWSError, data: WorkMail.Types.ListMailboxPermissionsResponse) => void): Request<WorkMail.Types.ListMailboxPermissionsResponse, AWSError>;
  /**
   * Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
   */
  listMobileDeviceAccessOverrides(params: WorkMail.Types.ListMobileDeviceAccessOverridesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListMobileDeviceAccessOverridesResponse) => void): Request<WorkMail.Types.ListMobileDeviceAccessOverridesResponse, AWSError>;
  /**
   * Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
   */
  listMobileDeviceAccessOverrides(callback?: (err: AWSError, data: WorkMail.Types.ListMobileDeviceAccessOverridesResponse) => void): Request<WorkMail.Types.ListMobileDeviceAccessOverridesResponse, AWSError>;
  /**
   * Lists the mobile device access rules for the specified WorkMail organization.
   */
  listMobileDeviceAccessRules(params: WorkMail.Types.ListMobileDeviceAccessRulesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListMobileDeviceAccessRulesResponse) => void): Request<WorkMail.Types.ListMobileDeviceAccessRulesResponse, AWSError>;
  /**
   * Lists the mobile device access rules for the specified WorkMail organization.
   */
  listMobileDeviceAccessRules(callback?: (err: AWSError, data: WorkMail.Types.ListMobileDeviceAccessRulesResponse) => void): Request<WorkMail.Types.ListMobileDeviceAccessRulesResponse, AWSError>;
  /**
   * Returns summaries of the customer's organizations.
   */
  listOrganizations(params: WorkMail.Types.ListOrganizationsRequest, callback?: (err: AWSError, data: WorkMail.Types.ListOrganizationsResponse) => void): Request<WorkMail.Types.ListOrganizationsResponse, AWSError>;
  /**
   * Returns summaries of the customer's organizations.
   */
  listOrganizations(callback?: (err: AWSError, data: WorkMail.Types.ListOrganizationsResponse) => void): Request<WorkMail.Types.ListOrganizationsResponse, AWSError>;
  /**
   * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
   */
  listResourceDelegates(params: WorkMail.Types.ListResourceDelegatesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListResourceDelegatesResponse) => void): Request<WorkMail.Types.ListResourceDelegatesResponse, AWSError>;
  /**
   * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
   */
  listResourceDelegates(callback?: (err: AWSError, data: WorkMail.Types.ListResourceDelegatesResponse) => void): Request<WorkMail.Types.ListResourceDelegatesResponse, AWSError>;
  /**
   * Returns summaries of the organization's resources.
   */
  listResources(params: WorkMail.Types.ListResourcesRequest, callback?: (err: AWSError, data: WorkMail.Types.ListResourcesResponse) => void): Request<WorkMail.Types.ListResourcesResponse, AWSError>;
  /**
   * Returns summaries of the organization's resources.
   */
  listResources(callback?: (err: AWSError, data: WorkMail.Types.ListResourcesResponse) => void): Request<WorkMail.Types.ListResourcesResponse, AWSError>;
  /**
   * Lists the tags applied to an WorkMail organization resource.
   */
  listTagsForResource(params: WorkMail.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.ListTagsForResourceResponse) => void): Request<WorkMail.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags applied to an WorkMail organization resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: WorkMail.Types.ListTagsForResourceResponse) => void): Request<WorkMail.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns summaries of the organization's users.
   */
  listUsers(params: WorkMail.Types.ListUsersRequest, callback?: (err: AWSError, data: WorkMail.Types.ListUsersResponse) => void): Request<WorkMail.Types.ListUsersResponse, AWSError>;
  /**
   * Returns summaries of the organization's users.
   */
  listUsers(callback?: (err: AWSError, data: WorkMail.Types.ListUsersResponse) => void): Request<WorkMail.Types.ListUsersResponse, AWSError>;
  /**
   * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
   */
  putAccessControlRule(params: WorkMail.Types.PutAccessControlRuleRequest, callback?: (err: AWSError, data: WorkMail.Types.PutAccessControlRuleResponse) => void): Request<WorkMail.Types.PutAccessControlRuleResponse, AWSError>;
  /**
   * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
   */
  putAccessControlRule(callback?: (err: AWSError, data: WorkMail.Types.PutAccessControlRuleResponse) => void): Request<WorkMail.Types.PutAccessControlRuleResponse, AWSError>;
  /**
   * Creates or updates the email monitoring configuration for a specified organization.
   */
  putEmailMonitoringConfiguration(params: WorkMail.Types.PutEmailMonitoringConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.PutEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.PutEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Creates or updates the email monitoring configuration for a specified organization.
   */
  putEmailMonitoringConfiguration(callback?: (err: AWSError, data: WorkMail.Types.PutEmailMonitoringConfigurationResponse) => void): Request<WorkMail.Types.PutEmailMonitoringConfigurationResponse, AWSError>;
  /**
   * Enables or disables a DMARC policy for a given organization.
   */
  putInboundDmarcSettings(params: WorkMail.Types.PutInboundDmarcSettingsRequest, callback?: (err: AWSError, data: WorkMail.Types.PutInboundDmarcSettingsResponse) => void): Request<WorkMail.Types.PutInboundDmarcSettingsResponse, AWSError>;
  /**
   * Enables or disables a DMARC policy for a given organization.
   */
  putInboundDmarcSettings(callback?: (err: AWSError, data: WorkMail.Types.PutInboundDmarcSettingsResponse) => void): Request<WorkMail.Types.PutInboundDmarcSettingsResponse, AWSError>;
  /**
   * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
   */
  putMailboxPermissions(params: WorkMail.Types.PutMailboxPermissionsRequest, callback?: (err: AWSError, data: WorkMail.Types.PutMailboxPermissionsResponse) => void): Request<WorkMail.Types.PutMailboxPermissionsResponse, AWSError>;
  /**
   * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
   */
  putMailboxPermissions(callback?: (err: AWSError, data: WorkMail.Types.PutMailboxPermissionsResponse) => void): Request<WorkMail.Types.PutMailboxPermissionsResponse, AWSError>;
  /**
   * Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
   */
  putMobileDeviceAccessOverride(params: WorkMail.Types.PutMobileDeviceAccessOverrideRequest, callback?: (err: AWSError, data: WorkMail.Types.PutMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.PutMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
   */
  putMobileDeviceAccessOverride(callback?: (err: AWSError, data: WorkMail.Types.PutMobileDeviceAccessOverrideResponse) => void): Request<WorkMail.Types.PutMobileDeviceAccessOverrideResponse, AWSError>;
  /**
   * Puts a retention policy to the specified organization.
   */
  putRetentionPolicy(params: WorkMail.Types.PutRetentionPolicyRequest, callback?: (err: AWSError, data: WorkMail.Types.PutRetentionPolicyResponse) => void): Request<WorkMail.Types.PutRetentionPolicyResponse, AWSError>;
  /**
   * Puts a retention policy to the specified organization.
   */
  putRetentionPolicy(callback?: (err: AWSError, data: WorkMail.Types.PutRetentionPolicyResponse) => void): Request<WorkMail.Types.PutRetentionPolicyResponse, AWSError>;
  /**
   * Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
   */
  registerMailDomain(params: WorkMail.Types.RegisterMailDomainRequest, callback?: (err: AWSError, data: WorkMail.Types.RegisterMailDomainResponse) => void): Request<WorkMail.Types.RegisterMailDomainResponse, AWSError>;
  /**
   * Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
   */
  registerMailDomain(callback?: (err: AWSError, data: WorkMail.Types.RegisterMailDomainResponse) => void): Request<WorkMail.Types.RegisterMailDomainResponse, AWSError>;
  /**
   * Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing. The equivalent console functionality for this operation is Enable. Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.
   */
  registerToWorkMail(params: WorkMail.Types.RegisterToWorkMailRequest, callback?: (err: AWSError, data: WorkMail.Types.RegisterToWorkMailResponse) => void): Request<WorkMail.Types.RegisterToWorkMailResponse, AWSError>;
  /**
   * Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing. The equivalent console functionality for this operation is Enable. Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.
   */
  registerToWorkMail(callback?: (err: AWSError, data: WorkMail.Types.RegisterToWorkMailResponse) => void): Request<WorkMail.Types.RegisterToWorkMailResponse, AWSError>;
  /**
   * Allows the administrator to reset the password for a user.
   */
  resetPassword(params: WorkMail.Types.ResetPasswordRequest, callback?: (err: AWSError, data: WorkMail.Types.ResetPasswordResponse) => void): Request<WorkMail.Types.ResetPasswordResponse, AWSError>;
  /**
   * Allows the administrator to reset the password for a user.
   */
  resetPassword(callback?: (err: AWSError, data: WorkMail.Types.ResetPasswordResponse) => void): Request<WorkMail.Types.ResetPasswordResponse, AWSError>;
  /**
   * Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Exporting mailbox content in the WorkMail Administrator Guide.
   */
  startMailboxExportJob(params: WorkMail.Types.StartMailboxExportJobRequest, callback?: (err: AWSError, data: WorkMail.Types.StartMailboxExportJobResponse) => void): Request<WorkMail.Types.StartMailboxExportJobResponse, AWSError>;
  /**
   * Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Exporting mailbox content in the WorkMail Administrator Guide.
   */
  startMailboxExportJob(callback?: (err: AWSError, data: WorkMail.Types.StartMailboxExportJobResponse) => void): Request<WorkMail.Types.StartMailboxExportJobResponse, AWSError>;
  /**
   * Applies the specified tags to the specified WorkMailorganization resource.
   */
  tagResource(params: WorkMail.Types.TagResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.TagResourceResponse) => void): Request<WorkMail.Types.TagResourceResponse, AWSError>;
  /**
   * Applies the specified tags to the specified WorkMailorganization resource.
   */
  tagResource(callback?: (err: AWSError, data: WorkMail.Types.TagResourceResponse) => void): Request<WorkMail.Types.TagResourceResponse, AWSError>;
  /**
   * Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a SourceArn or SourceAccount header.  The request must contain either one provider definition (EwsProvider or LambdaProvider) or the DomainName parameter. If the DomainName parameter is provided, the configuration stored under the DomainName will be tested. 
   */
  testAvailabilityConfiguration(params: WorkMail.Types.TestAvailabilityConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.TestAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.TestAvailabilityConfigurationResponse, AWSError>;
  /**
   * Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a SourceArn or SourceAccount header.  The request must contain either one provider definition (EwsProvider or LambdaProvider) or the DomainName parameter. If the DomainName parameter is provided, the configuration stored under the DomainName will be tested. 
   */
  testAvailabilityConfiguration(callback?: (err: AWSError, data: WorkMail.Types.TestAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.TestAvailabilityConfigurationResponse, AWSError>;
  /**
   * Untags the specified tags from the specified WorkMail organization resource.
   */
  untagResource(params: WorkMail.Types.UntagResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.UntagResourceResponse) => void): Request<WorkMail.Types.UntagResourceResponse, AWSError>;
  /**
   * Untags the specified tags from the specified WorkMail organization resource.
   */
  untagResource(callback?: (err: AWSError, data: WorkMail.Types.UntagResourceResponse) => void): Request<WorkMail.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  updateAvailabilityConfiguration(params: WorkMail.Types.UpdateAvailabilityConfigurationRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.UpdateAvailabilityConfigurationResponse, AWSError>;
  /**
   * Updates an existing AvailabilityConfiguration for the given WorkMail organization and domain.
   */
  updateAvailabilityConfiguration(callback?: (err: AWSError, data: WorkMail.Types.UpdateAvailabilityConfigurationResponse) => void): Request<WorkMail.Types.UpdateAvailabilityConfigurationResponse, AWSError>;
  /**
   * Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
   */
  updateDefaultMailDomain(params: WorkMail.Types.UpdateDefaultMailDomainRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateDefaultMailDomainResponse) => void): Request<WorkMail.Types.UpdateDefaultMailDomainResponse, AWSError>;
  /**
   * Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
   */
  updateDefaultMailDomain(callback?: (err: AWSError, data: WorkMail.Types.UpdateDefaultMailDomainResponse) => void): Request<WorkMail.Types.UpdateDefaultMailDomainResponse, AWSError>;
  /**
   * Updates attibutes in a group.
   */
  updateGroup(params: WorkMail.Types.UpdateGroupRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateGroupResponse) => void): Request<WorkMail.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates attibutes in a group.
   */
  updateGroup(callback?: (err: AWSError, data: WorkMail.Types.UpdateGroupResponse) => void): Request<WorkMail.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates an impersonation role for the given WorkMail organization.
   */
  updateImpersonationRole(params: WorkMail.Types.UpdateImpersonationRoleRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateImpersonationRoleResponse) => void): Request<WorkMail.Types.UpdateImpersonationRoleResponse, AWSError>;
  /**
   * Updates an impersonation role for the given WorkMail organization.
   */
  updateImpersonationRole(callback?: (err: AWSError, data: WorkMail.Types.UpdateImpersonationRoleResponse) => void): Request<WorkMail.Types.UpdateImpersonationRoleResponse, AWSError>;
  /**
   * Updates a user's current mailbox quota for a specified organization and user.
   */
  updateMailboxQuota(params: WorkMail.Types.UpdateMailboxQuotaRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateMailboxQuotaResponse) => void): Request<WorkMail.Types.UpdateMailboxQuotaResponse, AWSError>;
  /**
   * Updates a user's current mailbox quota for a specified organization and user.
   */
  updateMailboxQuota(callback?: (err: AWSError, data: WorkMail.Types.UpdateMailboxQuotaResponse) => void): Request<WorkMail.Types.UpdateMailboxQuotaResponse, AWSError>;
  /**
   * Updates a mobile device access rule for the specified WorkMail organization.
   */
  updateMobileDeviceAccessRule(params: WorkMail.Types.UpdateMobileDeviceAccessRuleRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.UpdateMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Updates a mobile device access rule for the specified WorkMail organization.
   */
  updateMobileDeviceAccessRule(callback?: (err: AWSError, data: WorkMail.Types.UpdateMobileDeviceAccessRuleResponse) => void): Request<WorkMail.Types.UpdateMobileDeviceAccessRuleResponse, AWSError>;
  /**
   * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
   */
  updatePrimaryEmailAddress(params: WorkMail.Types.UpdatePrimaryEmailAddressRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdatePrimaryEmailAddressResponse) => void): Request<WorkMail.Types.UpdatePrimaryEmailAddressResponse, AWSError>;
  /**
   * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
   */
  updatePrimaryEmailAddress(callback?: (err: AWSError, data: WorkMail.Types.UpdatePrimaryEmailAddressResponse) => void): Request<WorkMail.Types.UpdatePrimaryEmailAddressResponse, AWSError>;
  /**
   * Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call.
   */
  updateResource(params: WorkMail.Types.UpdateResourceRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateResourceResponse) => void): Request<WorkMail.Types.UpdateResourceResponse, AWSError>;
  /**
   * Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call.
   */
  updateResource(callback?: (err: AWSError, data: WorkMail.Types.UpdateResourceResponse) => void): Request<WorkMail.Types.UpdateResourceResponse, AWSError>;
  /**
   * Updates data for the user. To have the latest information, it must be preceded by a DescribeUser call. The dataset in the request should be the one expected when performing another DescribeUser call.
   */
  updateUser(params: WorkMail.Types.UpdateUserRequest, callback?: (err: AWSError, data: WorkMail.Types.UpdateUserResponse) => void): Request<WorkMail.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates data for the user. To have the latest information, it must be preceded by a DescribeUser call. The dataset in the request should be the one expected when performing another DescribeUser call.
   */
  updateUser(callback?: (err: AWSError, data: WorkMail.Types.UpdateUserResponse) => void): Request<WorkMail.Types.UpdateUserResponse, AWSError>;
}
declare namespace WorkMail {
  export interface AccessControlRule {
    /**
     * The rule name.
     */
    Name?: AccessControlRuleName;
    /**
     * The rule effect.
     */
    Effect?: AccessControlRuleEffect;
    /**
     * The rule description.
     */
    Description?: AccessControlRuleDescription;
    /**
     * IPv4 CIDR ranges to include in the rule.
     */
    IpRanges?: IpRangeList;
    /**
     * IPv4 CIDR ranges to exclude from the rule.
     */
    NotIpRanges?: IpRangeList;
    /**
     * Access protocol actions to include in the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail.
     */
    Actions?: ActionsList;
    /**
     * Access protocol actions to exclude from the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail.
     */
    NotActions?: ActionsList;
    /**
     * User IDs to include in the rule.
     */
    UserIds?: UserIdList;
    /**
     * User IDs to exclude from the rule.
     */
    NotUserIds?: UserIdList;
    /**
     * The date that the rule was created.
     */
    DateCreated?: Timestamp;
    /**
     * The date that the rule was modified.
     */
    DateModified?: Timestamp;
    /**
     * Impersonation role IDs to include in the rule.
     */
    ImpersonationRoleIds?: ImpersonationRoleIdList;
    /**
     * Impersonation role IDs to exclude from the rule.
     */
    NotImpersonationRoleIds?: ImpersonationRoleIdList;
  }
  export type AccessControlRuleAction = string;
  export type AccessControlRuleDescription = string;
  export type AccessControlRuleEffect = "ALLOW"|"DENY"|string;
  export type AccessControlRuleName = string;
  export type AccessControlRuleNameList = AccessControlRuleName[];
  export type AccessControlRulesList = AccessControlRule[];
  export type AccessEffect = "ALLOW"|"DENY"|string;
  export type ActionsList = AccessControlRuleAction[];
  export type Aliases = EmailAddress[];
  export type AmazonResourceName = string;
  export interface AssociateDelegateToResourceRequest {
    /**
     * The organization under which the resource exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The resource for which members (users or groups) are associated. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
    /**
     * The member (user or group) to associate to the resource. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity: entity  
     */
    EntityId: EntityIdentifier;
  }
  export interface AssociateDelegateToResourceResponse {
  }
  export interface AssociateMemberToGroupRequest {
    /**
     * The organization under which the group exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The group to which the member (user or group) is associated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group  
     */
    GroupId: EntityIdentifier;
    /**
     * The member (user or group) to associate to the group. The member ID can accept UserID or GroupId, Username or Groupname, or email.   Member: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: member@domain.tld   Member name: member  
     */
    MemberId: EntityIdentifier;
  }
  export interface AssociateMemberToGroupResponse {
  }
  export interface AssumeImpersonationRoleRequest {
    /**
     * The WorkMail organization under which the impersonation role will be assumed.
     */
    OrganizationId: OrganizationId;
    /**
     * The impersonation role ID to assume.
     */
    ImpersonationRoleId: ImpersonationRoleId;
  }
  export interface AssumeImpersonationRoleResponse {
    /**
     * The authentication token for the impersonation role.
     */
    Token?: ImpersonationToken;
    /**
     * The authentication token's validity, in seconds.
     */
    ExpiresIn?: ExpiresIn;
  }
  export interface AvailabilityConfiguration {
    /**
     * Displays the domain to which the provider applies.
     */
    DomainName?: DomainName;
    /**
     * Displays the provider type that applies to this domain.
     */
    ProviderType?: AvailabilityProviderType;
    /**
     * If ProviderType is EWS, then this field contains RedactedEwsAvailabilityProvider. Otherwise, it is not required.
     */
    EwsProvider?: RedactedEwsAvailabilityProvider;
    /**
     * If ProviderType is LAMBDA then this field contains LambdaAvailabilityProvider. Otherwise, it is not required.
     */
    LambdaProvider?: LambdaAvailabilityProvider;
    /**
     * The date and time at which the availability configuration was created.
     */
    DateCreated?: Timestamp;
    /**
     * The date and time at which the availability configuration was last modified.
     */
    DateModified?: Timestamp;
  }
  export type AvailabilityConfigurationList = AvailabilityConfiguration[];
  export type AvailabilityProviderType = "EWS"|"LAMBDA"|string;
  export interface BookingOptions {
    /**
     * The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.
     */
    AutoAcceptRequests?: Boolean;
    /**
     * The resource's ability to automatically decline any recurring requests.
     */
    AutoDeclineRecurringRequests?: Boolean;
    /**
     * The resource's ability to automatically decline any conflicting requests.
     */
    AutoDeclineConflictingRequests?: Boolean;
  }
  export type Boolean = boolean;
  export type BooleanObject = boolean;
  export interface CancelMailboxExportJobRequest {
    /**
     * The idempotency token for the client request.
     */
    ClientToken: IdempotencyClientToken;
    /**
     * The job ID.
     */
    JobId: MailboxExportJobId;
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
  }
  export interface CancelMailboxExportJobResponse {
  }
  export interface CreateAliasRequest {
    /**
     * The organization under which the member (user or group) exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The member (user or group) to which this alias is added.
     */
    EntityId: WorkMailIdentifier;
    /**
     * The alias to add to the member set.
     */
    Alias: EmailAddress;
  }
  export interface CreateAliasResponse {
  }
  export interface CreateAvailabilityConfigurationRequest {
    /**
     * An idempotent token that ensures that an API request is executed only once.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The WorkMail organization for which the AvailabilityConfiguration will be created.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain to which the provider applies.
     */
    DomainName: DomainName;
    /**
     * Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider.
     */
    EwsProvider?: EwsAvailabilityProvider;
    /**
     * Lambda availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider.
     */
    LambdaProvider?: LambdaAvailabilityProvider;
  }
  export interface CreateAvailabilityConfigurationResponse {
  }
  export interface CreateGroupRequest {
    /**
     * The organization under which the group is to be created.
     */
    OrganizationId: OrganizationId;
    /**
     * The name of the group.
     */
    Name: GroupName;
    /**
     * If this parameter is enabled, the group will be hidden from the address book.
     */
    HiddenFromGlobalAddressList?: Boolean;
  }
  export interface CreateGroupResponse {
    /**
     * The identifier of the group.
     */
    GroupId?: WorkMailIdentifier;
  }
  export interface CreateImpersonationRoleRequest {
    /**
     * The idempotency token for the client request.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The WorkMail organization to create the new impersonation role within.
     */
    OrganizationId: OrganizationId;
    /**
     * The name of the new impersonation role.
     */
    Name: ImpersonationRoleName;
    /**
     * The impersonation role's type. The available impersonation role types are READ_ONLY or FULL_ACCESS.
     */
    Type: ImpersonationRoleType;
    /**
     * The description of the new impersonation role.
     */
    Description?: ImpersonationRoleDescription;
    /**
     * The list of rules for the impersonation role.
     */
    Rules: ImpersonationRuleList;
  }
  export interface CreateImpersonationRoleResponse {
    /**
     * The new impersonation role ID.
     */
    ImpersonationRoleId?: ImpersonationRoleId;
  }
  export interface CreateMobileDeviceAccessRuleRequest {
    /**
     * The WorkMail organization under which the rule will be created.
     */
    OrganizationId: OrganizationId;
    /**
     * The idempotency token for the client request.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The rule name.
     */
    Name: MobileDeviceAccessRuleName;
    /**
     * The rule description.
     */
    Description?: MobileDeviceAccessRuleDescription;
    /**
     * The effect of the rule when it matches. Allowed values are ALLOW or DENY.
     */
    Effect: MobileDeviceAccessRuleEffect;
    /**
     * Device types that the rule will match.
     */
    DeviceTypes?: DeviceTypeList;
    /**
     * Device types that the rule will not match. All other device types will match.
     */
    NotDeviceTypes?: DeviceTypeList;
    /**
     * Device models that the rule will match.
     */
    DeviceModels?: DeviceModelList;
    /**
     * Device models that the rule will not match. All other device models will match.
     */
    NotDeviceModels?: DeviceModelList;
    /**
     * Device operating systems that the rule will match.
     */
    DeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * Device operating systems that the rule will not match. All other device operating systems will match.
     */
    NotDeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * Device user agents that the rule will match.
     */
    DeviceUserAgents?: DeviceUserAgentList;
    /**
     * Device user agents that the rule will not match. All other device user agents will match.
     */
    NotDeviceUserAgents?: DeviceUserAgentList;
  }
  export interface CreateMobileDeviceAccessRuleResponse {
    /**
     * The identifier for the newly created mobile device access rule.
     */
    MobileDeviceAccessRuleId?: MobileDeviceAccessRuleId;
  }
  export interface CreateOrganizationRequest {
    /**
     * The AWS Directory Service directory ID.
     */
    DirectoryId?: DirectoryId;
    /**
     * The organization alias.
     */
    Alias: OrganizationName;
    /**
     * The idempotency token associated with the request.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The email domains to associate with the organization.
     */
    Domains?: Domains;
    /**
     * The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.
     */
    KmsKeyArn?: KmsKeyArn;
    /**
     * When true, allows organization interoperability between WorkMail and Microsoft Exchange. If true, you must include a AD Connector directory ID in the request.
     */
    EnableInteroperability?: Boolean;
  }
  export interface CreateOrganizationResponse {
    /**
     * The organization ID.
     */
    OrganizationId?: OrganizationId;
  }
  export interface CreateResourceRequest {
    /**
     * The identifier associated with the organization for which the resource is created.
     */
    OrganizationId: OrganizationId;
    /**
     * The name of the new resource.
     */
    Name: ResourceName;
    /**
     * The type of the new resource. The available types are equipment and room.
     */
    Type: ResourceType;
    /**
     * Resource description.
     */
    Description?: ResourceDescription;
    /**
     * If this parameter is enabled, the resource will be hidden from the address book.
     */
    HiddenFromGlobalAddressList?: Boolean;
  }
  export interface CreateResourceResponse {
    /**
     * The identifier of the new resource.
     */
    ResourceId?: ResourceId;
  }
  export interface CreateUserRequest {
    /**
     * The identifier of the organization for which the user is created.
     */
    OrganizationId: OrganizationId;
    /**
     * The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.
     */
    Name: UserName;
    /**
     * The display name for the new user.
     */
    DisplayName: UserAttribute;
    /**
     * The password for the new user.
     */
    Password?: Password;
    /**
     * The role of the new user. You cannot pass SYSTEM_USER or RESOURCE role in a single request. When a user role is not selected, the default role of USER is selected.
     */
    Role?: UserRole;
    /**
     * The first name of the new user.
     */
    FirstName?: UserAttribute;
    /**
     * The last name of the new user. 
     */
    LastName?: UserAttribute;
    /**
     * If this parameter is enabled, the user will be hidden from the address book.
     */
    HiddenFromGlobalAddressList?: Boolean;
  }
  export interface CreateUserResponse {
    /**
     * The identifier for the new user.
     */
    UserId?: WorkMailIdentifier;
  }
  export interface Delegate {
    /**
     * The identifier for the user or group associated as the resource's delegate.
     */
    Id: String;
    /**
     * The type of the delegate: user or group.
     */
    Type: MemberType;
  }
  export interface DeleteAccessControlRuleRequest {
    /**
     * The identifier for the organization.
     */
    OrganizationId: OrganizationId;
    /**
     * The name of the access control rule.
     */
    Name: AccessControlRuleName;
  }
  export interface DeleteAccessControlRuleResponse {
  }
  export interface DeleteAliasRequest {
    /**
     * The identifier for the organization under which the user exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the member (user or group) from which to have the aliases removed.
     */
    EntityId: WorkMailIdentifier;
    /**
     * The aliases to be removed from the user's set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set).
     */
    Alias: EmailAddress;
  }
  export interface DeleteAliasResponse {
  }
  export interface DeleteAvailabilityConfigurationRequest {
    /**
     * The WorkMail organization for which the AvailabilityConfiguration will be deleted.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain for which the AvailabilityConfiguration will be deleted.
     */
    DomainName: DomainName;
  }
  export interface DeleteAvailabilityConfigurationResponse {
  }
  export interface DeleteEmailMonitoringConfigurationRequest {
    /**
     * The ID of the organization from which the email monitoring configuration is deleted.
     */
    OrganizationId: OrganizationId;
  }
  export interface DeleteEmailMonitoringConfigurationResponse {
  }
  export interface DeleteGroupRequest {
    /**
     * The organization that contains the group.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the group to be deleted. The identifier can be the GroupId, or Groupname. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Group name: group  
     */
    GroupId: EntityIdentifier;
  }
  export interface DeleteGroupResponse {
  }
  export interface DeleteImpersonationRoleRequest {
    /**
     * The WorkMail organization from which to delete the impersonation role.
     */
    OrganizationId: OrganizationId;
    /**
     * The ID of the impersonation role to delete.
     */
    ImpersonationRoleId: ImpersonationRoleId;
  }
  export interface DeleteImpersonationRoleResponse {
  }
  export interface DeleteMailboxPermissionsRequest {
    /**
     * The identifier of the organization under which the member (user or group) exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the entity that owns the mailbox. The identifier can be UserId or Group Id, Username or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The identifier of the entity for which to delete granted permissions. The identifier can be UserId, ResourceID, or Group Id, Username or Groupname, or email.   Grantee ID: 12345678-1234-1234-1234-123456789012,r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: grantee@domain.tld   Grantee name: grantee  
     */
    GranteeId: EntityIdentifier;
  }
  export interface DeleteMailboxPermissionsResponse {
  }
  export interface DeleteMobileDeviceAccessOverrideRequest {
    /**
     * The WorkMail organization for which the access override will be deleted.
     */
    OrganizationId: OrganizationId;
    /**
     * The WorkMail user for which you want to delete the override. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user   
     */
    UserId: EntityIdentifier;
    /**
     * The mobile device for which you delete the override. DeviceId is case insensitive.
     */
    DeviceId: DeviceId;
  }
  export interface DeleteMobileDeviceAccessOverrideResponse {
  }
  export interface DeleteMobileDeviceAccessRuleRequest {
    /**
     * The WorkMail organization under which the rule will be deleted.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the rule to be deleted.
     */
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleId;
  }
  export interface DeleteMobileDeviceAccessRuleResponse {
  }
  export interface DeleteOrganizationRequest {
    /**
     * The idempotency token associated with the request.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
    /**
     * If true, deletes the AWS Directory Service directory associated with the organization.
     */
    DeleteDirectory: Boolean;
    /**
     * Deletes a WorkMail organization even if the organization has enabled users.
     */
    ForceDelete?: Boolean;
  }
  export interface DeleteOrganizationResponse {
    /**
     * The organization ID.
     */
    OrganizationId?: OrganizationId;
    /**
     * The state of the organization.
     */
    State?: String;
  }
  export interface DeleteResourceRequest {
    /**
     * The identifier associated with the organization from which the resource is deleted.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the resource to be deleted. The identifier can accept ResourceId, or Resourcename. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
  }
  export interface DeleteResourceResponse {
  }
  export interface DeleteRetentionPolicyRequest {
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
    /**
     * The retention policy ID.
     */
    Id: ShortString;
  }
  export interface DeleteRetentionPolicyResponse {
  }
  export interface DeleteUserRequest {
    /**
     * The organization that contains the user to be deleted.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the user to be deleted. The identifier can be the UserId or Username. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   User name: user  
     */
    UserId: EntityIdentifier;
  }
  export interface DeleteUserResponse {
  }
  export interface DeregisterFromWorkMailRequest {
    /**
     * The identifier for the organization under which the WorkMail entity exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the member to be updated. The identifier can be UserId, ResourceId, or Group Id, Username, Resourcename, or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
  }
  export interface DeregisterFromWorkMailResponse {
  }
  export interface DeregisterMailDomainRequest {
    /**
     * The WorkMail organization for which the domain will be deregistered.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain to deregister in WorkMail and SES.
     */
    DomainName: WorkMailDomainName;
  }
  export interface DeregisterMailDomainResponse {
  }
  export interface DescribeEmailMonitoringConfigurationRequest {
    /**
     * The ID of the organization for which the email monitoring configuration is described.
     */
    OrganizationId: OrganizationId;
  }
  export interface DescribeEmailMonitoringConfigurationResponse {
    /**
     * The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.
     */
    RoleArn?: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.
     */
    LogGroupArn?: LogGroupArn;
  }
  export interface DescribeEntityRequest {
    /**
     * The identifier for the organization under which the entity exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The email under which the entity exists.
     */
    Email: EmailAddress;
  }
  export interface DescribeEntityResponse {
    /**
     * The entity ID under which the entity exists.
     */
    EntityId?: WorkMailIdentifier;
    /**
     * Username, GroupName, or ResourceName based on entity type.
     */
    Name?: String;
    /**
     * Entity type.
     */
    Type?: EntityType;
  }
  export interface DescribeGroupRequest {
    /**
     * The identifier for the organization under which the group exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the group to be described. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group  
     */
    GroupId: EntityIdentifier;
  }
  export interface DescribeGroupResponse {
    /**
     * The identifier of the described group.
     */
    GroupId?: WorkMailIdentifier;
    /**
     * The name of the described group.
     */
    Name?: GroupName;
    /**
     * The email of the described group.
     */
    Email?: EmailAddress;
    /**
     * The state of the user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).
     */
    State?: EntityState;
    /**
     * The date and time when a user was registered to WorkMail, in UNIX epoch time format.
     */
    EnabledDate?: Timestamp;
    /**
     * The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.
     */
    DisabledDate?: Timestamp;
    /**
     * If the value is set to true, the group is hidden from the address book.
     */
    HiddenFromGlobalAddressList?: Boolean;
  }
  export interface DescribeInboundDmarcSettingsRequest {
    /**
     * Lists the ID of the given organization.
     */
    OrganizationId: OrganizationId;
  }
  export interface DescribeInboundDmarcSettingsResponse {
    /**
     * Lists the enforcement setting of the applied policy.
     */
    Enforced?: Boolean;
  }
  export interface DescribeMailboxExportJobRequest {
    /**
     * The mailbox export job ID.
     */
    JobId: MailboxExportJobId;
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
  }
  export interface DescribeMailboxExportJobResponse {
    /**
     * The identifier of the user or resource associated with the mailbox.
     */
    EntityId?: WorkMailIdentifier;
    /**
     * The mailbox export job description.
     */
    Description?: Description;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple Storage Service (Amazon S3) bucket.
     */
    RoleArn?: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.
     */
    KmsKeyArn?: KmsKeyArn;
    /**
     * The name of the S3 bucket.
     */
    S3BucketName?: S3BucketName;
    /**
     * The S3 bucket prefix.
     */
    S3Prefix?: S3ObjectKey;
    /**
     * The path to the S3 bucket and file that the mailbox export job is exporting to.
     */
    S3Path?: S3ObjectKey;
    /**
     * The estimated progress of the mailbox export job, in percentage points.
     */
    EstimatedProgress?: Percentage;
    /**
     * The state of the mailbox export job.
     */
    State?: MailboxExportJobState;
    /**
     * Error information for failed mailbox export jobs.
     */
    ErrorInfo?: MailboxExportErrorInfo;
    /**
     * The mailbox export job start timestamp.
     */
    StartTime?: Timestamp;
    /**
     * The mailbox export job end timestamp.
     */
    EndTime?: Timestamp;
  }
  export interface DescribeOrganizationRequest {
    /**
     * The identifier for the organization to be described.
     */
    OrganizationId: OrganizationId;
  }
  export interface DescribeOrganizationResponse {
    /**
     * The identifier of an organization.
     */
    OrganizationId?: OrganizationId;
    /**
     * The alias for an organization.
     */
    Alias?: OrganizationName;
    /**
     * The state of an organization.
     */
    State?: String;
    /**
     * The identifier for the directory associated with an WorkMail organization.
     */
    DirectoryId?: String;
    /**
     * The type of directory associated with the WorkMail organization.
     */
    DirectoryType?: String;
    /**
     * The default mail domain associated with the organization.
     */
    DefaultMailDomain?: String;
    /**
     * The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.
     */
    CompletedDate?: Timestamp;
    /**
     * (Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.
     */
    ErrorMessage?: String;
    /**
     * The Amazon Resource Name (ARN) of the organization.
     */
    ARN?: AmazonResourceName;
    /**
     * The user ID of the migration admin if migration is enabled for the organization.
     */
    MigrationAdmin?: WorkMailIdentifier;
    /**
     * Indicates if interoperability is enabled for this organization.
     */
    InteroperabilityEnabled?: Boolean;
  }
  export interface DescribeResourceRequest {
    /**
     * The identifier associated with the organization for which the resource is described.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the resource to be described. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
  }
  export interface DescribeResourceResponse {
    /**
     * The identifier of the described resource.
     */
    ResourceId?: ResourceId;
    /**
     * The email of the described resource.
     */
    Email?: EmailAddress;
    /**
     * The name of the described resource.
     */
    Name?: ResourceName;
    /**
     * The type of the described resource.
     */
    Type?: ResourceType;
    /**
     * The booking options for the described resource.
     */
    BookingOptions?: BookingOptions;
    /**
     * The state of the resource: enabled (registered to WorkMail), disabled (deregistered or never registered to WorkMail), or deleted.
     */
    State?: EntityState;
    /**
     * The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.
     */
    EnabledDate?: Timestamp;
    /**
     * The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.
     */
    DisabledDate?: Timestamp;
    /**
     * Description of the resource.
     */
    Description?: ResourceDescription;
    /**
     * If enabled, the resource is hidden from the global address list.
     */
    HiddenFromGlobalAddressList?: Boolean;
  }
  export interface DescribeUserRequest {
    /**
     * The identifier for the organization under which the user exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the user to be described. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user   
     */
    UserId: EntityIdentifier;
  }
  export interface DescribeUserResponse {
    /**
     * The identifier for the described user.
     */
    UserId?: WorkMailIdentifier;
    /**
     * The name for the user.
     */
    Name?: UserName;
    /**
     * The email of the user.
     */
    Email?: EmailAddress;
    /**
     * The display name of the user.
     */
    DisplayName?: UserAttribute;
    /**
     * The state of a user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).
     */
    State?: EntityState;
    /**
     * In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, SYSTEM_USER, and REMOTE_USER.
     */
    UserRole?: UserRole;
    /**
     * The date and time at which the user was enabled for WorkMailusage, in UNIX epoch time format.
     */
    EnabledDate?: Timestamp;
    /**
     * The date and time at which the user was disabled for WorkMail usage, in UNIX epoch time format.
     */
    DisabledDate?: Timestamp;
    /**
     * The date when the mailbox was created for the user.
     */
    MailboxProvisionedDate?: Timestamp;
    /**
     * The date when the mailbox was removed for the user.
     */
    MailboxDeprovisionedDate?: Timestamp;
    /**
     * First name of the user.
     */
    FirstName?: UserAttribute;
    /**
     * Last name of the user.
     */
    LastName?: UserAttribute;
    /**
     * If enabled, the user is hidden from the global address list.
     */
    HiddenFromGlobalAddressList?: Boolean;
    /**
     * Initials of the user.
     */
    Initials?: UserAttribute;
    /**
     * User's contact number.
     */
    Telephone?: UserAttribute;
    /**
     * Street where the user is located.
     */
    Street?: UserAttribute;
    /**
     * Job title of the user.
     */
    JobTitle?: UserAttribute;
    /**
     * City where the user is located.
     */
    City?: UserAttribute;
    /**
     * Company of the user.
     */
    Company?: UserAttribute;
    /**
     * Zip code of the user.
     */
    ZipCode?: UserAttribute;
    /**
     * Department of the user.
     */
    Department?: UserAttribute;
    /**
     * Country where the user is located.
     */
    Country?: UserAttribute;
    /**
     * Office where the user is located.
     */
    Office?: UserAttribute;
  }
  export type Description = string;
  export type DeviceId = string;
  export type DeviceModel = string;
  export type DeviceModelList = DeviceModel[];
  export type DeviceOperatingSystem = string;
  export type DeviceOperatingSystemList = DeviceOperatingSystem[];
  export type DeviceType = string;
  export type DeviceTypeList = DeviceType[];
  export type DeviceUserAgent = string;
  export type DeviceUserAgentList = DeviceUserAgent[];
  export type DirectoryId = string;
  export interface DisassociateDelegateFromResourceRequest {
    /**
     * The identifier for the organization under which the resource exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the resource from which delegates' set members are removed.  The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
    /**
     * The identifier for the member (user, group) to be removed from the resource's delegates. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity: entity  
     */
    EntityId: EntityIdentifier;
  }
  export interface DisassociateDelegateFromResourceResponse {
  }
  export interface DisassociateMemberFromGroupRequest {
    /**
     * The identifier for the organization under which the group exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the group from which members are removed. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group  
     */
    GroupId: EntityIdentifier;
    /**
     * The identifier for the member to be removed from the group. The member ID can accept UserID or GroupId, Username or Groupname, or email.   Member ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: member@domain.tld   Member name: member  
     */
    MemberId: EntityIdentifier;
  }
  export interface DisassociateMemberFromGroupResponse {
  }
  export interface DnsRecord {
    /**
     * The RFC 1035 record type. Possible values: CNAME, A, MX.
     */
    Type?: String;
    /**
     * The DNS hostname.- For example, domain.example.com.
     */
    Hostname?: String;
    /**
     * The value returned by the DNS for a query to that hostname and record type.
     */
    Value?: String;
  }
  export type DnsRecordVerificationStatus = "PENDING"|"VERIFIED"|"FAILED"|string;
  export type DnsRecords = DnsRecord[];
  export interface Domain {
    /**
     * The fully qualified domain name.
     */
    DomainName: DomainName;
    /**
     * The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.
     */
    HostedZoneId?: HostedZoneId;
  }
  export type DomainName = string;
  export type Domains = Domain[];
  export type EmailAddress = string;
  export type EntityIdentifier = string;
  export type EntityState = "ENABLED"|"DISABLED"|"DELETED"|string;
  export type EntityType = "GROUP"|"USER"|"RESOURCE"|string;
  export interface EwsAvailabilityProvider {
    /**
     * The endpoint of the remote EWS server.
     */
    EwsEndpoint: Url;
    /**
     * The username used to authenticate the remote EWS server.
     */
    EwsUsername: ExternalUserName;
    /**
     * The password used to authenticate the remote EWS server.
     */
    EwsPassword: Password;
  }
  export type ExpiresIn = number;
  export type ExternalUserName = string;
  export interface FolderConfiguration {
    /**
     * The folder name.
     */
    Name: FolderName;
    /**
     * The action to take on the folder contents at the end of the folder configuration period.
     */
    Action: RetentionAction;
    /**
     * The number of days for which the folder-configuration action applies.
     */
    Period?: RetentionPeriod;
  }
  export type FolderConfigurations = FolderConfiguration[];
  export type FolderName = "INBOX"|"DELETED_ITEMS"|"SENT_ITEMS"|"DRAFTS"|"JUNK_EMAIL"|string;
  export interface GetAccessControlEffectRequest {
    /**
     * The identifier for the organization.
     */
    OrganizationId: OrganizationId;
    /**
     * The IPv4 address.
     */
    IpAddress: IpAddress;
    /**
     * The access protocol action. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail.
     */
    Action: AccessControlRuleAction;
    /**
     * The user ID.
     */
    UserId?: WorkMailIdentifier;
    /**
     * The impersonation role ID.
     */
    ImpersonationRoleId?: ImpersonationRoleId;
  }
  export interface GetAccessControlEffectResponse {
    /**
     * The rule effect.
     */
    Effect?: AccessControlRuleEffect;
    /**
     * The rules that match the given parameters, resulting in an effect.
     */
    MatchedRules?: AccessControlRuleNameList;
  }
  export interface GetDefaultRetentionPolicyRequest {
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
  }
  export interface GetDefaultRetentionPolicyResponse {
    /**
     * The retention policy ID.
     */
    Id?: ShortString;
    /**
     * The retention policy name.
     */
    Name?: ShortString;
    /**
     * The retention policy description.
     */
    Description?: String;
    /**
     * The retention policy folder configurations.
     */
    FolderConfigurations?: FolderConfigurations;
  }
  export interface GetImpersonationRoleEffectRequest {
    /**
     * The WorkMail organization where the impersonation role is defined.
     */
    OrganizationId: OrganizationId;
    /**
     * The impersonation role ID to test.
     */
    ImpersonationRoleId: ImpersonationRoleId;
    /**
     * The WorkMail organization user chosen to test the impersonation role. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user   
     */
    TargetUser: EntityIdentifier;
  }
  export interface GetImpersonationRoleEffectResponse {
    /**
     * The impersonation role type.
     */
    Type?: ImpersonationRoleType;
    /**
     *  Effect of the impersonation role on the target user based on its rules. Available effects are ALLOW or DENY.
     */
    Effect?: AccessEffect;
    /**
     * A list of the rules that match the input and produce the configured effect.
     */
    MatchedRules?: ImpersonationMatchedRuleList;
  }
  export interface GetImpersonationRoleRequest {
    /**
     * The WorkMail organization from which to retrieve the impersonation role.
     */
    OrganizationId: OrganizationId;
    /**
     * The impersonation role ID to retrieve.
     */
    ImpersonationRoleId: ImpersonationRoleId;
  }
  export interface GetImpersonationRoleResponse {
    /**
     * The impersonation role ID.
     */
    ImpersonationRoleId?: ImpersonationRoleId;
    /**
     * The impersonation role name.
     */
    Name?: ImpersonationRoleName;
    /**
     * The impersonation role type.
     */
    Type?: ImpersonationRoleType;
    /**
     * The impersonation role description.
     */
    Description?: ImpersonationRoleDescription;
    /**
     * The list of rules for the given impersonation role.
     */
    Rules?: ImpersonationRuleList;
    /**
     * The date when the impersonation role was created.
     */
    DateCreated?: Timestamp;
    /**
     * The date when the impersonation role was last modified.
     */
    DateModified?: Timestamp;
  }
  export interface GetMailDomainRequest {
    /**
     * The WorkMail organization for which the domain is retrieved.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain from which you want to retrieve details.
     */
    DomainName: WorkMailDomainName;
  }
  export interface GetMailDomainResponse {
    /**
     * A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming email traffic to SES. See admin guide for more details.
     */
    Records?: DnsRecords;
    /**
     * Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.
     */
    IsTestDomain?: Boolean;
    /**
     * Specifies whether the domain is the default domain for your organization.
     */
    IsDefault?: Boolean;
    /**
     *  Indicates the status of the domain ownership verification.
     */
    OwnershipVerificationStatus?: DnsRecordVerificationStatus;
    /**
     * Indicates the status of a DKIM verification.
     */
    DkimVerificationStatus?: DnsRecordVerificationStatus;
  }
  export interface GetMailboxDetailsRequest {
    /**
     * The identifier for the organization that contains the user whose mailbox details are being requested.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the user whose mailbox details are being requested. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user  
     */
    UserId: EntityIdentifier;
  }
  export interface GetMailboxDetailsResponse {
    /**
     * The maximum allowed mailbox size, in MB, for the specified user.
     */
    MailboxQuota?: MailboxQuota;
    /**
     * The current mailbox size, in MB, for the specified user.
     */
    MailboxSize?: MailboxSize;
  }
  export interface GetMobileDeviceAccessEffectRequest {
    /**
     * The WorkMail organization to simulate the access effect for.
     */
    OrganizationId: OrganizationId;
    /**
     * Device type the simulated user will report.
     */
    DeviceType?: DeviceType;
    /**
     * Device model the simulated user will report.
     */
    DeviceModel?: DeviceModel;
    /**
     * Device operating system the simulated user will report.
     */
    DeviceOperatingSystem?: DeviceOperatingSystem;
    /**
     * Device user agent the simulated user will report.
     */
    DeviceUserAgent?: DeviceUserAgent;
  }
  export interface GetMobileDeviceAccessEffectResponse {
    /**
     * The effect of the simulated access, ALLOW or DENY, after evaluating mobile device access rules in the WorkMail organization for the simulated user parameters.
     */
    Effect?: MobileDeviceAccessRuleEffect;
    /**
     * A list of the rules which matched the simulated user input and produced the effect.
     */
    MatchedRules?: MobileDeviceAccessMatchedRuleList;
  }
  export interface GetMobileDeviceAccessOverrideRequest {
    /**
     * The WorkMail organization to which you want to apply the override.
     */
    OrganizationId: OrganizationId;
    /**
     * Identifies the WorkMail user for the override. Accepts the following types of user identities:    User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user   
     */
    UserId: EntityIdentifier;
    /**
     * The mobile device to which the override applies. DeviceId is case insensitive.
     */
    DeviceId: DeviceId;
  }
  export interface GetMobileDeviceAccessOverrideResponse {
    /**
     * The WorkMail user to which the access override applies.
     */
    UserId?: WorkMailIdentifier;
    /**
     * The device to which the access override applies.
     */
    DeviceId?: DeviceId;
    /**
     * The effect of the override, ALLOW or DENY.
     */
    Effect?: MobileDeviceAccessRuleEffect;
    /**
     * A description of the override.
     */
    Description?: MobileDeviceAccessRuleDescription;
    /**
     * The date the override was first created.
     */
    DateCreated?: Timestamp;
    /**
     * The date the description was last modified.
     */
    DateModified?: Timestamp;
  }
  export interface Group {
    /**
     * The identifier of the group.
     */
    Id?: WorkMailIdentifier;
    /**
     * The email of the group.
     */
    Email?: EmailAddress;
    /**
     * The name of the group.
     */
    Name?: GroupName;
    /**
     * The state of the group, which can be ENABLED, DISABLED, or DELETED.
     */
    State?: EntityState;
    /**
     * The date indicating when the group was enabled for WorkMail use.
     */
    EnabledDate?: Timestamp;
    /**
     * The date indicating when the group was disabled from WorkMail use.
     */
    DisabledDate?: Timestamp;
  }
  export interface GroupIdentifier {
    /**
     * Group ID that matched the group.
     */
    GroupId?: WorkMailIdentifier;
    /**
     * Group name that matched the group.
     */
    GroupName?: GroupName;
  }
  export type GroupIdentifiers = GroupIdentifier[];
  export type GroupName = string;
  export type Groups = Group[];
  export type HostedZoneId = string;
  export type IdempotencyClientToken = string;
  export interface ImpersonationMatchedRule {
    /**
     * The ID of the rule that matched the input
     */
    ImpersonationRuleId?: ImpersonationRuleId;
    /**
     * The name of the rule that matched the input.
     */
    Name?: ImpersonationRuleName;
  }
  export type ImpersonationMatchedRuleList = ImpersonationMatchedRule[];
  export interface ImpersonationRole {
    /**
     * The identifier of the impersonation role.
     */
    ImpersonationRoleId?: ImpersonationRoleId;
    /**
     * The impersonation role name.
     */
    Name?: ImpersonationRoleName;
    /**
     * The impersonation role type.
     */
    Type?: ImpersonationRoleType;
    /**
     * The date when the impersonation role was created.
     */
    DateCreated?: Timestamp;
    /**
     * The date when the impersonation role was last modified.
     */
    DateModified?: Timestamp;
  }
  export type ImpersonationRoleDescription = string;
  export type ImpersonationRoleId = string;
  export type ImpersonationRoleIdList = ImpersonationRoleId[];
  export type ImpersonationRoleList = ImpersonationRole[];
  export type ImpersonationRoleName = string;
  export type ImpersonationRoleType = "FULL_ACCESS"|"READ_ONLY"|string;
  export interface ImpersonationRule {
    /**
     * The identifier of the rule.
     */
    ImpersonationRuleId: ImpersonationRuleId;
    /**
     * The rule name.
     */
    Name?: ImpersonationRuleName;
    /**
     * The rule description.
     */
    Description?: ImpersonationRuleDescription;
    /**
     * The effect of the rule when it matches the input. Allowed effect values are ALLOW or DENY.
     */
    Effect: AccessEffect;
    /**
     * A list of user IDs that match the rule.
     */
    TargetUsers?: TargetUsers;
    /**
     * A list of user IDs that don't match the rule.
     */
    NotTargetUsers?: TargetUsers;
  }
  export type ImpersonationRuleDescription = string;
  export type ImpersonationRuleId = string;
  export type ImpersonationRuleList = ImpersonationRule[];
  export type ImpersonationRuleName = string;
  export type ImpersonationToken = string;
  export type IpAddress = string;
  export type IpRange = string;
  export type IpRangeList = IpRange[];
  export type Jobs = MailboxExportJob[];
  export type KmsKeyArn = string;
  export type LambdaArn = string;
  export interface LambdaAvailabilityProvider {
    /**
     * The Amazon Resource Name (ARN) of the Lambda that acts as the availability provider.
     */
    LambdaArn: LambdaArn;
  }
  export interface ListAccessControlRulesRequest {
    /**
     * The identifier for the organization.
     */
    OrganizationId: OrganizationId;
  }
  export interface ListAccessControlRulesResponse {
    /**
     * The access control rules.
     */
    Rules?: AccessControlRulesList;
  }
  export interface ListAliasesRequest {
    /**
     * The identifier for the organization under which the entity exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the entity for which to list the aliases.
     */
    EntityId: WorkMailIdentifier;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAliasesResponse {
    /**
     * The entity's paginated aliases.
     */
    Aliases?: Aliases;
    /**
     * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListAvailabilityConfigurationsRequest {
    /**
     * The WorkMail organization for which the AvailabilityConfiguration's will be listed.
     */
    OrganizationId: OrganizationId;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token to use to retrieve the next page of results. The first call does not require a token.
     */
    NextToken?: NextToken;
  }
  export interface ListAvailabilityConfigurationsResponse {
    /**
     * The list of AvailabilityConfiguration's that exist for the specified WorkMail organization.
     */
    AvailabilityConfigurations?: AvailabilityConfigurationList;
    /**
     * The token to use to retrieve the next page of results. The value is null when there are no further results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupMembersRequest {
    /**
     * The identifier for the organization under which the group exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the group to which the members (users or groups) are associated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group  
     */
    GroupId: EntityIdentifier;
    /**
     *  The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListGroupMembersResponse {
    /**
     * The members associated to the group.
     */
    Members?: Members;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupsFilters {
    /**
     * Filters only groups with the provided name prefix.
     */
    NamePrefix?: String;
    /**
     * Filters only groups with the provided primary email prefix.
     */
    PrimaryEmailPrefix?: String;
    /**
     * Filters only groups with the provided state.
     */
    State?: EntityState;
  }
  export interface ListGroupsForEntityFilters {
    /**
     * Filters only group names that start with the provided name prefix.
     */
    GroupNamePrefix?: String;
  }
  export interface ListGroupsForEntityRequest {
    /**
     * The identifier for the organization under which the entity exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the entity. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * Limit the search results based on the filter criteria.
     */
    Filters?: ListGroupsForEntityFilters;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListGroupsForEntityResponse {
    /**
     * The overview of groups in an organization.
     */
    Groups?: GroupIdentifiers;
    /**
     * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListGroupsRequest {
    /**
     * The identifier for the organization under which the groups exist.
     */
    OrganizationId: OrganizationId;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
    /**
     * Limit the search results based on the filter criteria. Only one filter per request is supported.
     */
    Filters?: ListGroupsFilters;
  }
  export interface ListGroupsResponse {
    /**
     * The overview of groups for an organization.
     */
    Groups?: Groups;
    /**
     * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListImpersonationRolesRequest {
    /**
     * The WorkMail organization to which the listed impersonation roles belong.
     */
    OrganizationId: OrganizationId;
    /**
     * The token used to retrieve the next page of results. The first call doesn't require a token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results returned in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListImpersonationRolesResponse {
    /**
     * The list of impersonation roles under the given WorkMail organization.
     */
    Roles?: ImpersonationRoleList;
    /**
     * The token to retrieve the next page of results. The value is null when there are no results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListMailDomainsRequest {
    /**
     * The WorkMail organization for which to list domains.
     */
    OrganizationId: OrganizationId;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token to use to retrieve the next page of results. The first call does not require a token.
     */
    NextToken?: NextToken;
  }
  export interface ListMailDomainsResponse {
    /**
     * The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.
     */
    MailDomains?: MailDomains;
    /**
     * The token to use to retrieve the next page of results. The value becomes null when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListMailboxExportJobsRequest {
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListMailboxExportJobsResponse {
    /**
     * The mailbox export job details.
     */
    Jobs?: Jobs;
    /**
     * The token to use to retrieve the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListMailboxPermissionsRequest {
    /**
     * The identifier of the organization under which the user, group, or resource exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the user, or resource for which to list mailbox permissions. The entity ID can accept UserId or ResourceId, Username or Resourcename, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, or r-0123456789a0123456789b0123456789   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListMailboxPermissionsResponse {
    /**
     * One page of the user, group, or resource mailbox permissions.
     */
    Permissions?: Permissions;
    /**
     * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListMobileDeviceAccessOverridesRequest {
    /**
     * The WorkMail organization under which to list mobile device access overrides.
     */
    OrganizationId: OrganizationId;
    /**
     * The WorkMail user under which you list the mobile device access overrides. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user   
     */
    UserId?: EntityIdentifier;
    /**
     * The mobile device to which the access override applies.
     */
    DeviceId?: DeviceId;
    /**
     * The token to use to retrieve the next page of results. The first call does not require a token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListMobileDeviceAccessOverridesResponse {
    /**
     * The list of mobile device access overrides that exist for the specified WorkMail organization and user.
     */
    Overrides?: MobileDeviceAccessOverridesList;
    /**
     * The token to use to retrieve the next page of results. The value is “null” when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListMobileDeviceAccessRulesRequest {
    /**
     * The WorkMail organization for which to list the rules.
     */
    OrganizationId: OrganizationId;
  }
  export interface ListMobileDeviceAccessRulesResponse {
    /**
     * The list of mobile device access rules that exist under the specified WorkMail organization.
     */
    Rules?: MobileDeviceAccessRulesList;
  }
  export interface ListOrganizationsRequest {
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
  }
  export interface ListOrganizationsResponse {
    /**
     * The overview of owned organizations presented as a list of organization summaries.
     */
    OrganizationSummaries?: OrganizationSummaries;
    /**
     * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface ListResourceDelegatesRequest {
    /**
     * The identifier for the organization that contains the resource for which delegates are listed.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the resource whose delegates are listed. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
    /**
     * The token used to paginate through the delegates associated with a resource.
     */
    NextToken?: NextToken;
    /**
     * The number of maximum results in a page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListResourceDelegatesResponse {
    /**
     * One page of the resource's delegates.
     */
    Delegates?: ResourceDelegates;
    /**
     * The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListResourcesFilters {
    /**
     * Filters only resource that start with the entered name prefix .
     */
    NamePrefix?: String;
    /**
     * Filters only resource with the provided primary email prefix.
     */
    PrimaryEmailPrefix?: String;
    /**
     * Filters only resource with the provided state.
     */
    State?: EntityState;
  }
  export interface ListResourcesRequest {
    /**
     * The identifier for the organization under which the resources exist.
     */
    OrganizationId: OrganizationId;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
    /**
     * Limit the resource search results based on the filter criteria. You can only use one filter per request.
     */
    Filters?: ListResourcesFilters;
  }
  export interface ListResourcesResponse {
    /**
     * One page of the organization's resource representation.
     */
    Resources?: Resources;
    /**
     *  The token used to paginate through all the organization's resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tag key-value pairs.
     */
    Tags?: TagList;
  }
  export interface ListUsersFilters {
    /**
     * Filters only users with the provided username prefix.
     */
    UsernamePrefix?: String;
    /**
     * Filters only users with the provided display name prefix.
     */
    DisplayNamePrefix?: UserAttribute;
    /**
     * Filters only users with the provided email prefix.
     */
    PrimaryEmailPrefix?: String;
    /**
     * Filters only users with the provided state.
     */
    State?: EntityState;
  }
  export interface ListUsersRequest {
    /**
     * The identifier for the organization under which the users exist.
     */
    OrganizationId: OrganizationId;
    /**
     * The token to use to retrieve the next page of results. The first call does not contain any tokens.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a single call.
     */
    MaxResults?: MaxResults;
    /**
     * Limit the user search results based on the filter criteria. You can only use one filter per request.
     */
    Filters?: ListUsersFilters;
  }
  export interface ListUsersResponse {
    /**
     * The overview of users for an organization.
     */
    Users?: Users;
    /**
     *  The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export type LogGroupArn = string;
  export interface MailDomainSummary {
    /**
     * The domain name.
     */
    DomainName?: DomainName;
    /**
     * Whether the domain is default or not.
     */
    DefaultDomain?: Boolean;
  }
  export type MailDomains = MailDomainSummary[];
  export type MailboxExportErrorInfo = string;
  export interface MailboxExportJob {
    /**
     * The identifier of the mailbox export job.
     */
    JobId?: MailboxExportJobId;
    /**
     * The identifier of the user or resource associated with the mailbox.
     */
    EntityId?: WorkMailIdentifier;
    /**
     * The mailbox export job description.
     */
    Description?: Description;
    /**
     * The name of the S3 bucket.
     */
    S3BucketName?: S3BucketName;
    /**
     * The path to the S3 bucket and file that the mailbox export job exports to.
     */
    S3Path?: S3ObjectKey;
    /**
     * The estimated progress of the mailbox export job, in percentage points.
     */
    EstimatedProgress?: Percentage;
    /**
     * The state of the mailbox export job.
     */
    State?: MailboxExportJobState;
    /**
     * The mailbox export job start timestamp.
     */
    StartTime?: Timestamp;
    /**
     * The mailbox export job end timestamp.
     */
    EndTime?: Timestamp;
  }
  export type MailboxExportJobId = string;
  export type MailboxExportJobState = "RUNNING"|"COMPLETED"|"FAILED"|"CANCELLED"|string;
  export type MailboxQuota = number;
  export type MailboxSize = number;
  export type MaxResults = number;
  export interface Member {
    /**
     * The identifier of the member.
     */
    Id?: String;
    /**
     * The name of the member.
     */
    Name?: String;
    /**
     * A member can be a user or group.
     */
    Type?: MemberType;
    /**
     * The state of the member, which can be ENABLED, DISABLED, or DELETED.
     */
    State?: EntityState;
    /**
     * The date indicating when the member was enabled for WorkMail use.
     */
    EnabledDate?: Timestamp;
    /**
     * The date indicating when the member was disabled from WorkMail use.
     */
    DisabledDate?: Timestamp;
  }
  export type MemberType = "GROUP"|"USER"|string;
  export type Members = Member[];
  export interface MobileDeviceAccessMatchedRule {
    /**
     * Identifier of the rule that a simulated user matches.
     */
    MobileDeviceAccessRuleId?: MobileDeviceAccessRuleId;
    /**
     * Name of a rule that a simulated user matches.
     */
    Name?: MobileDeviceAccessRuleName;
  }
  export type MobileDeviceAccessMatchedRuleList = MobileDeviceAccessMatchedRule[];
  export interface MobileDeviceAccessOverride {
    /**
     * The WorkMail user to which the access override applies.
     */
    UserId?: WorkMailIdentifier;
    /**
     * The device to which the override applies.
     */
    DeviceId?: DeviceId;
    /**
     * The effect of the override, ALLOW or DENY.
     */
    Effect?: MobileDeviceAccessRuleEffect;
    /**
     * A description of the override.
     */
    Description?: MobileDeviceAccessRuleDescription;
    /**
     * The date the override was first created.
     */
    DateCreated?: Timestamp;
    /**
     * The date the override was last modified.
     */
    DateModified?: Timestamp;
  }
  export type MobileDeviceAccessOverridesList = MobileDeviceAccessOverride[];
  export interface MobileDeviceAccessRule {
    /**
     * The ID assigned to a mobile access rule.
     */
    MobileDeviceAccessRuleId?: MobileDeviceAccessRuleId;
    /**
     * The name of a mobile access rule.
     */
    Name?: MobileDeviceAccessRuleName;
    /**
     * The description of a mobile access rule.
     */
    Description?: MobileDeviceAccessRuleDescription;
    /**
     * The effect of the rule when it matches. Allowed values are ALLOW or DENY.
     */
    Effect?: MobileDeviceAccessRuleEffect;
    /**
     * Device types that a rule will match.
     */
    DeviceTypes?: DeviceTypeList;
    /**
     * Device types that a rule will not match. All other device types will match.
     */
    NotDeviceTypes?: DeviceTypeList;
    /**
     * Device models that a rule will match.
     */
    DeviceModels?: DeviceModelList;
    /**
     * Device models that a rule will not match. All other device models will match.
     */
    NotDeviceModels?: DeviceModelList;
    /**
     * Device operating systems that a rule will match.
     */
    DeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * Device operating systems that a rule will not match. All other device types will match.
     */
    NotDeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * Device user agents that a rule will match.
     */
    DeviceUserAgents?: DeviceUserAgentList;
    /**
     * Device user agents that a rule will not match. All other device user agents will match.
     */
    NotDeviceUserAgents?: DeviceUserAgentList;
    /**
     * The date and time at which an access rule was created.
     */
    DateCreated?: Timestamp;
    /**
     * The date and time at which an access rule was modified.
     */
    DateModified?: Timestamp;
  }
  export type MobileDeviceAccessRuleDescription = string;
  export type MobileDeviceAccessRuleEffect = "ALLOW"|"DENY"|string;
  export type MobileDeviceAccessRuleId = string;
  export type MobileDeviceAccessRuleName = string;
  export type MobileDeviceAccessRulesList = MobileDeviceAccessRule[];
  export type NewResourceDescription = string;
  export type NextToken = string;
  export type OrganizationId = string;
  export type OrganizationName = string;
  export type OrganizationSummaries = OrganizationSummary[];
  export interface OrganizationSummary {
    /**
     * The identifier associated with the organization.
     */
    OrganizationId?: OrganizationId;
    /**
     * The alias associated with the organization.
     */
    Alias?: OrganizationName;
    /**
     * The default email domain associated with the organization.
     */
    DefaultMailDomain?: DomainName;
    /**
     * The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.
     */
    ErrorMessage?: String;
    /**
     * The state associated with the organization.
     */
    State?: String;
  }
  export type Password = string;
  export type Percentage = number;
  export interface Permission {
    /**
     * The identifier of the user, group, or resource to which the permissions are granted.
     */
    GranteeId: WorkMailIdentifier;
    /**
     * The type of user, group, or resource referred to in GranteeId.
     */
    GranteeType: MemberType;
    /**
     * The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.
     */
    PermissionValues: PermissionValues;
  }
  export type PermissionType = "FULL_ACCESS"|"SEND_AS"|"SEND_ON_BEHALF"|string;
  export type PermissionValues = PermissionType[];
  export type Permissions = Permission[];
  export type PolicyDescription = string;
  export interface PutAccessControlRuleRequest {
    /**
     * The rule name.
     */
    Name: AccessControlRuleName;
    /**
     * The rule effect.
     */
    Effect: AccessControlRuleEffect;
    /**
     * The rule description.
     */
    Description: AccessControlRuleDescription;
    /**
     * IPv4 CIDR ranges to include in the rule.
     */
    IpRanges?: IpRangeList;
    /**
     * IPv4 CIDR ranges to exclude from the rule.
     */
    NotIpRanges?: IpRangeList;
    /**
     * Access protocol actions to include in the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail.
     */
    Actions?: ActionsList;
    /**
     * Access protocol actions to exclude from the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail.
     */
    NotActions?: ActionsList;
    /**
     * User IDs to include in the rule.
     */
    UserIds?: UserIdList;
    /**
     * User IDs to exclude from the rule.
     */
    NotUserIds?: UserIdList;
    /**
     * The identifier of the organization.
     */
    OrganizationId: OrganizationId;
    /**
     * Impersonation role IDs to include in the rule.
     */
    ImpersonationRoleIds?: ImpersonationRoleIdList;
    /**
     * Impersonation role IDs to exclude from the rule.
     */
    NotImpersonationRoleIds?: ImpersonationRoleIdList;
  }
  export interface PutAccessControlRuleResponse {
  }
  export interface PutEmailMonitoringConfigurationRequest {
    /**
     * The ID of the organization for which the email monitoring configuration is set.
     */
    OrganizationId: OrganizationId;
    /**
     * The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.
     */
    RoleArn: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.
     */
    LogGroupArn: LogGroupArn;
  }
  export interface PutEmailMonitoringConfigurationResponse {
  }
  export interface PutInboundDmarcSettingsRequest {
    /**
     * The ID of the organization that you are applying the DMARC policy to.
     */
    OrganizationId: OrganizationId;
    /**
     * Enforces or suspends a policy after it's applied.
     */
    Enforced: BooleanObject;
  }
  export interface PutInboundDmarcSettingsResponse {
  }
  export interface PutMailboxPermissionsRequest {
    /**
     * The identifier of the organization under which the user, group, or resource exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the user or resource for which to update mailbox permissions. The identifier can be UserId, ResourceID, or Group Id, Username, Resourcename, or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The identifier of the user, group, or resource to which to grant the permissions. The identifier can be UserId, ResourceID, or Group Id, Username, Resourcename, or Groupname, or email.   Grantee ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: grantee@domain.tld   Grantee name: grantee  
     */
    GranteeId: EntityIdentifier;
    /**
     * The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.
     */
    PermissionValues: PermissionValues;
  }
  export interface PutMailboxPermissionsResponse {
  }
  export interface PutMobileDeviceAccessOverrideRequest {
    /**
     * Identifies the WorkMail organization for which you create the override.
     */
    OrganizationId: OrganizationId;
    /**
     * The WorkMail user for which you create the override. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user   
     */
    UserId: EntityIdentifier;
    /**
     * The mobile device for which you create the override. DeviceId is case insensitive.
     */
    DeviceId: DeviceId;
    /**
     * The effect of the override, ALLOW or DENY.
     */
    Effect: MobileDeviceAccessRuleEffect;
    /**
     * A description of the override.
     */
    Description?: MobileDeviceAccessRuleDescription;
  }
  export interface PutMobileDeviceAccessOverrideResponse {
  }
  export interface PutRetentionPolicyRequest {
    /**
     * The organization ID.
     */
    OrganizationId: OrganizationId;
    /**
     * The retention policy ID.
     */
    Id?: ShortString;
    /**
     * The retention policy name.
     */
    Name: ShortString;
    /**
     * The retention policy description.
     */
    Description?: PolicyDescription;
    /**
     * The retention policy folder configurations.
     */
    FolderConfigurations: FolderConfigurations;
  }
  export interface PutRetentionPolicyResponse {
  }
  export interface RedactedEwsAvailabilityProvider {
    /**
     * The endpoint of the remote EWS server.
     */
    EwsEndpoint?: Url;
    /**
     * The username used to authenticate the remote EWS server.
     */
    EwsUsername?: ExternalUserName;
  }
  export interface RegisterMailDomainRequest {
    /**
     * Idempotency token used when retrying requests.
     */
    ClientToken?: IdempotencyClientToken;
    /**
     * The WorkMail organization under which you're creating the domain.
     */
    OrganizationId: OrganizationId;
    /**
     * The name of the mail domain to create in WorkMail and SES.
     */
    DomainName: WorkMailDomainName;
  }
  export interface RegisterMailDomainResponse {
  }
  export interface RegisterToWorkMailRequest {
    /**
     * The identifier for the organization under which the user, group, or resource exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the user, group, or resource to be updated. The identifier can accept UserId, ResourceId, or GroupId, or Username, Resourcename, or Groupname. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The email for the user, group, or resource to be updated.
     */
    Email: EmailAddress;
  }
  export interface RegisterToWorkMailResponse {
  }
  export interface ResetPasswordRequest {
    /**
     * The identifier of the organization that contains the user for which the password is reset.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the user for whom the password is reset.
     */
    UserId: WorkMailIdentifier;
    /**
     * The new password for the user.
     */
    Password: Password;
  }
  export interface ResetPasswordResponse {
  }
  export interface Resource {
    /**
     * The identifier of the resource.
     */
    Id?: WorkMailIdentifier;
    /**
     * The email of the resource.
     */
    Email?: EmailAddress;
    /**
     * The name of the resource.
     */
    Name?: ResourceName;
    /**
     * The type of the resource: equipment or room.
     */
    Type?: ResourceType;
    /**
     * The state of the resource, which can be ENABLED, DISABLED, or DELETED.
     */
    State?: EntityState;
    /**
     * The date indicating when the resource was enabled for WorkMail use.
     */
    EnabledDate?: Timestamp;
    /**
     * The date indicating when the resource was disabled from WorkMail use.
     */
    DisabledDate?: Timestamp;
    /**
     * Resource description.
     */
    Description?: ResourceDescription;
  }
  export type ResourceDelegates = Delegate[];
  export type ResourceDescription = string;
  export type ResourceId = string;
  export type ResourceName = string;
  export type ResourceType = "ROOM"|"EQUIPMENT"|string;
  export type Resources = Resource[];
  export type RetentionAction = "NONE"|"DELETE"|"PERMANENTLY_DELETE"|string;
  export type RetentionPeriod = number;
  export type RoleArn = string;
  export type S3BucketName = string;
  export type S3ObjectKey = string;
  export type ShortString = string;
  export interface StartMailboxExportJobRequest {
    /**
     * The idempotency token for the client request.
     */
    ClientToken: IdempotencyClientToken;
    /**
     * The identifier associated with the organization.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the user or resource associated with the mailbox. The identifier can accept UserId or ResourceId, Username or Resourcename, or email. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789 , or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The mailbox export job description.
     */
    Description?: Description;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3 bucket.
     */
    RoleArn: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.
     */
    KmsKeyArn: KmsKeyArn;
    /**
     * The name of the S3 bucket.
     */
    S3BucketName: S3BucketName;
    /**
     * The S3 bucket prefix.
     */
    S3Prefix: S3ObjectKey;
  }
  export interface StartMailboxExportJobResponse {
    /**
     * The job ID.
     */
    JobId?: MailboxExportJobId;
  }
  export type String = string;
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The tag key-value pairs.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TargetUsers = EntityIdentifier[];
  export interface TestAvailabilityConfigurationRequest {
    /**
     * The WorkMail organization where the availability provider will be tested.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested.
     */
    DomainName?: DomainName;
    EwsProvider?: EwsAvailabilityProvider;
    LambdaProvider?: LambdaAvailabilityProvider;
  }
  export interface TestAvailabilityConfigurationResponse {
    /**
     * Boolean indicating whether the test passed or failed.
     */
    TestPassed?: Boolean;
    /**
     * String containing the reason for a failed test if TestPassed is false.
     */
    FailureReason?: String;
  }
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The tag keys.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAvailabilityConfigurationRequest {
    /**
     * The WorkMail organization for which the AvailabilityConfiguration will be updated.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain to which the provider applies the availability configuration.
     */
    DomainName: DomainName;
    /**
     * The EWS availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider. The previously stored provider will be overridden by the one provided.
     */
    EwsProvider?: EwsAvailabilityProvider;
    /**
     * The Lambda availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider. The previously stored provider will be overridden by the one provided.
     */
    LambdaProvider?: LambdaAvailabilityProvider;
  }
  export interface UpdateAvailabilityConfigurationResponse {
  }
  export interface UpdateDefaultMailDomainRequest {
    /**
     * The WorkMail organization for which to list domains.
     */
    OrganizationId: OrganizationId;
    /**
     * The domain name that will become the default domain.
     */
    DomainName: WorkMailDomainName;
  }
  export interface UpdateDefaultMailDomainResponse {
  }
  export interface UpdateGroupRequest {
    /**
     * The identifier for the organization under which the group exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the group to be updated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group  
     */
    GroupId: EntityIdentifier;
    /**
     * If enabled, the group is hidden from the global address list.
     */
    HiddenFromGlobalAddressList?: BooleanObject;
  }
  export interface UpdateGroupResponse {
  }
  export interface UpdateImpersonationRoleRequest {
    /**
     * The WorkMail organization that contains the impersonation role to update.
     */
    OrganizationId: OrganizationId;
    /**
     * The ID of the impersonation role to update.
     */
    ImpersonationRoleId: ImpersonationRoleId;
    /**
     * The updated impersonation role name.
     */
    Name: ImpersonationRoleName;
    /**
     * The updated impersonation role type.
     */
    Type: ImpersonationRoleType;
    /**
     * The updated impersonation role description.
     */
    Description?: ImpersonationRoleDescription;
    /**
     * The updated list of rules.
     */
    Rules: ImpersonationRuleList;
  }
  export interface UpdateImpersonationRoleResponse {
  }
  export interface UpdateMailboxQuotaRequest {
    /**
     * The identifier for the organization that contains the user for whom to update the mailbox quota.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifer for the user for whom to update the mailbox quota. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user  
     */
    UserId: EntityIdentifier;
    /**
     * The updated mailbox quota, in MB, for the specified user.
     */
    MailboxQuota: MailboxQuota;
  }
  export interface UpdateMailboxQuotaResponse {
  }
  export interface UpdateMobileDeviceAccessRuleRequest {
    /**
     * The WorkMail organization under which the rule will be updated.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the rule to be updated.
     */
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleId;
    /**
     * The updated rule name.
     */
    Name: MobileDeviceAccessRuleName;
    /**
     * The updated rule description.
     */
    Description?: MobileDeviceAccessRuleDescription;
    /**
     * The effect of the rule when it matches. Allowed values are ALLOW or DENY.
     */
    Effect: MobileDeviceAccessRuleEffect;
    /**
     * Device types that the updated rule will match.
     */
    DeviceTypes?: DeviceTypeList;
    /**
     * Device types that the updated rule will not match. All other device types will match.
     */
    NotDeviceTypes?: DeviceTypeList;
    /**
     * Device models that the updated rule will match.
     */
    DeviceModels?: DeviceModelList;
    /**
     * Device models that the updated rule will not match. All other device models will match.
     */
    NotDeviceModels?: DeviceModelList;
    /**
     * Device operating systems that the updated rule will match.
     */
    DeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * Device operating systems that the updated rule will not match. All other device operating systems will match.
     */
    NotDeviceOperatingSystems?: DeviceOperatingSystemList;
    /**
     * User agents that the updated rule will match.
     */
    DeviceUserAgents?: DeviceUserAgentList;
    /**
     * User agents that the updated rule will not match. All other user agents will match.
     */
    NotDeviceUserAgents?: DeviceUserAgentList;
  }
  export interface UpdateMobileDeviceAccessRuleResponse {
  }
  export interface UpdatePrimaryEmailAddressRequest {
    /**
     * The organization that contains the user, group, or resource to update.
     */
    OrganizationId: OrganizationId;
    /**
     * The user, group, or resource to update. The identifier can accept UseriD, ResourceId, or GroupId, Username, Resourcename, or Groupname, or email. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity  
     */
    EntityId: EntityIdentifier;
    /**
     * The value of the email to be updated as primary.
     */
    Email: EmailAddress;
  }
  export interface UpdatePrimaryEmailAddressResponse {
  }
  export interface UpdateResourceRequest {
    /**
     * The identifier associated with the organization for which the resource is updated.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier of the resource to be updated. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource  
     */
    ResourceId: EntityIdentifier;
    /**
     * The name of the resource to be updated.
     */
    Name?: ResourceName;
    /**
     * The resource's booking options to be updated.
     */
    BookingOptions?: BookingOptions;
    /**
     * Updates the resource description.
     */
    Description?: NewResourceDescription;
    /**
     * Updates the resource type.
     */
    Type?: ResourceType;
    /**
     * If enabled, the resource is hidden from the global address list.
     */
    HiddenFromGlobalAddressList?: BooleanObject;
  }
  export interface UpdateResourceResponse {
  }
  export interface UpdateUserRequest {
    /**
     * The identifier for the organization under which the user exists.
     */
    OrganizationId: OrganizationId;
    /**
     * The identifier for the user to be updated. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user  
     */
    UserId: EntityIdentifier;
    /**
     * Updates the user role. You cannot pass SYSTEM_USER or RESOURCE.
     */
    Role?: UserRole;
    /**
     * Updates the display name of the user.
     */
    DisplayName?: UserAttribute;
    /**
     * Updates the user's first name.
     */
    FirstName?: UserAttribute;
    /**
     * Updates the user's last name.
     */
    LastName?: UserAttribute;
    /**
     * If enabled, the user is hidden from the global address list.
     */
    HiddenFromGlobalAddressList?: BooleanObject;
    /**
     * Updates the user's initials.
     */
    Initials?: UserAttribute;
    /**
     * Updates the user's contact details.
     */
    Telephone?: UserAttribute;
    /**
     * Updates the user's street address.
     */
    Street?: UserAttribute;
    /**
     * Updates the user's job title.
     */
    JobTitle?: UserAttribute;
    /**
     * Updates the user's city.
     */
    City?: UserAttribute;
    /**
     * Updates the user's company.
     */
    Company?: UserAttribute;
    /**
     * Updates the user's zipcode.
     */
    ZipCode?: UserAttribute;
    /**
     * Updates the user's department.
     */
    Department?: UserAttribute;
    /**
     * Updates the user's country.
     */
    Country?: UserAttribute;
    /**
     * Updates the user's office.
     */
    Office?: UserAttribute;
  }
  export interface UpdateUserResponse {
  }
  export type Url = string;
  export interface User {
    /**
     * The identifier of the user.
     */
    Id?: WorkMailIdentifier;
    /**
     * The email of the user.
     */
    Email?: EmailAddress;
    /**
     * The name of the user.
     */
    Name?: UserName;
    /**
     * The display name of the user.
     */
    DisplayName?: String;
    /**
     * The state of the user, which can be ENABLED, DISABLED, or DELETED.
     */
    State?: EntityState;
    /**
     * The role of the user.
     */
    UserRole?: UserRole;
    /**
     * The date indicating when the user was enabled for WorkMail use.
     */
    EnabledDate?: Timestamp;
    /**
     * The date indicating when the user was disabled from WorkMail use.
     */
    DisabledDate?: Timestamp;
  }
  export type UserAttribute = string;
  export type UserIdList = WorkMailIdentifier[];
  export type UserName = string;
  export type UserRole = "USER"|"RESOURCE"|"SYSTEM_USER"|"REMOTE_USER"|string;
  export type Users = User[];
  export type WorkMailDomainName = string;
  export type WorkMailIdentifier = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-10-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkMail client.
   */
  export import Types = WorkMail;
}
export = WorkMail;
