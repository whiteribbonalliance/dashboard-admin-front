import { TCampaignCode } from '@types'

export interface IUser {
    username: string
    campaign_access: TCampaignCode[]
}
