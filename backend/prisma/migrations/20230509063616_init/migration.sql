-- AlterTable
ALTER TABLE "Allergy" ADD COLUMN     "delFlg" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PatientProfile" ADD COLUMN     "delFlg" BOOLEAN NOT NULL DEFAULT false;
