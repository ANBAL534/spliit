'use server'

import { env } from './env'

export async function getRuntimeFeatureFlags() {
  return {
    enableExpenseDocuments: env.NEXT_PUBLIC_ENABLE_EXPENSE_DOCUMENTS,
    enableReceiptExtract: env.NEXT_PUBLIC_ENABLE_RECEIPT_EXTRACT,
    enableCategoryExtract: env.NEXT_PUBLIC_ENABLE_CATEGORY_EXTRACT,
    maxUploadImageSize: env.MAX_UPLOAD_IMAGE_SIZE,
  }
}

export type RuntimeFeatureFlags = Awaited<
  ReturnType<typeof getRuntimeFeatureFlags>
>
