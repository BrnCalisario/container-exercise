/*
  Warnings:

  - You are about to alter the column `dataLancamento` on the `Jogo` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Jogo` MODIFY `dataLancamento` DATETIME NOT NULL;
