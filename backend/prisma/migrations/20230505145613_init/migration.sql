/*
  Warnings:

  - Made the column `patient_name` on table `PatientProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PatientProfile" ALTER COLUMN "patient_name" SET NOT NULL;
