import GroupExpensesPageClient from '@/app/groups/[groupId]/expenses/page.client'
import { getRuntimeFeatureFlags } from '@/lib/featureFlags'
import { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Expenses',
}

export default async function GroupExpensesPage() {
  const { enableReceiptExtract, maxUploadImageSize } =
    await getRuntimeFeatureFlags()
  return (
    <GroupExpensesPageClient
      enableReceiptExtract={enableReceiptExtract}
      maxUploadImageSize={maxUploadImageSize}
    />
  )
}
