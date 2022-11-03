/*
  Warnings:

  - You are about to drop the column `ano` on the `Jogo` table. All the data in the column will be lost.
  - Added the required column `dataLancamento` to the `Jogo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Jogo` DROP COLUMN `ano`,
    ADD COLUMN `dataLancamento` DATE NOT NULL;
