-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2024 at 11:03 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pdo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `mobile` bigint(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fileno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `role`, `mobile`, `password`, `fileno`) VALUES
(2, 'Ajay', 'Admin', 123, '123', 0);

-- --------------------------------------------------------

--
-- Table structure for table `checkup_remarks`
--

CREATE TABLE `checkup_remarks` (
  `id` int(11) NOT NULL,
  `caseno` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checkup_remarks`
--

INSERT INTO `checkup_remarks` (`id`, `caseno`, `date`, `remarks`, `file`) VALUES
(1, 1, '2024-07-10', 'today\'s checkup', ''),
(2, 1, '2024-07-09', 'yesterday\'s checkup', ''),
(3, 2, '2024-07-10', 'jay remarks today', '');

-- --------------------------------------------------------

--
-- Table structure for table `lab_test`
--

CREATE TABLE `lab_test` (
  `id` int(11) NOT NULL,
  `caseno` int(11) NOT NULL,
  `lab` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lab_test`
--

INSERT INTO `lab_test` (`id`, `caseno`, `lab`, `date`, `remarks`, `file`) VALUES
(2, 2, 'Select Lab Test', '0000-00-00', '', 'uploads/2Screenshot 2024-05-21 235723.png'),
(3, 5, 'Select Lab Test', '2024-06-17', 'Remarks', 'uploads/5/doctor_login.png'),
(4, 6, 'Select Lab Test', '0000-00-00', '', ''),
(5, 7, 'Select Lab Test', '0000-00-00', '', ''),
(6, 8, 'Select Lab Test', '0000-00-00', '', ''),
(7, 9, 'Select Lab Test', '2024-06-17', 'Remarks', ''),
(8, 10, 'Select Lab Test', '0000-00-00', '', ''),
(9, 11, 'Select Lab Test', '0000-00-00', '', ''),
(10, 12, 'Select Lab Test', '0000-00-00', '', ''),
(11, 13, 'Select Lab Test', '2024-06-18', 'Remarks', 'uploads/13/doctor_login.png'),
(12, 13, 'Select Lab Test', '2024-06-16', 'blood report', 'uploads/13/admin.png'),
(13, 14, 'Select Lab Test', '0000-00-00', '', ''),
(14, 15, 'Select Lab Test', '0000-00-00', '', ''),
(15, 16, 'Select Lab Test', '0000-00-00', '', ''),
(16, 17, 'Select Lab Test', '0000-00-00', '', ''),
(17, 18, 'Select Lab Test', '0000-00-00', '', ''),
(18, 19, 'Select Lab Test', '0000-00-00', '', ''),
(20, 87, '', '0000-00-00', 'umnag lab test', ''),
(21, 1, 'Blood Test', '0000-00-00', '1234', '');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `caseno` int(11) NOT NULL,
  `prev_amt` int(11) NOT NULL DEFAULT 0,
  `present_amt` int(11) NOT NULL DEFAULT 0,
  `paid_amt` int(11) NOT NULL DEFAULT 0,
  `future_amt` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `caseno`, `prev_amt`, `present_amt`, `paid_amt`, `future_amt`) VALUES
(1, 1, 100, 900, 890, 110),
(2, 2, 0, 123, 23, 100);

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL,
  `caseno` int(11) NOT NULL,
  `medicine` varchar(255) NOT NULL,
  `dose` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `caseno`, `medicine`, `dose`, `date`) VALUES
(1, 1, 'medicine1', 'dose1', '2024-07-09'),
(2, 1, 'medicine2', 'dose2', '2024-07-09'),
(3, 1, 'medicine1', 'dose1', '2024-07-09'),
(4, 1, 'medicine2', 'dose2', '2024-07-09'),
(5, 2, 'capsule1', 'dose1', '2024-07-10'),
(6, 2, 'capusle2', 'dose2', '2024-07-10'),
(7, 2, 'capsule3', 'dose3', '2024-07-10');

-- --------------------------------------------------------

--
-- Table structure for table `test_details`
--

CREATE TABLE `test_details` (
  `caseno` int(11) NOT NULL,
  `doctorid` int(11) NOT NULL,
  `fileno` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `dob` date NOT NULL,
  `marital` varchar(255) NOT NULL,
  `complexion` varchar(255) NOT NULL,
  `constitution` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile` bigint(11) NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `height` float NOT NULL,
  `weight` float NOT NULL,
  `child` int(11) NOT NULL,
  `systolic` float NOT NULL,
  `diastolic` float NOT NULL,
  `pulse` float NOT NULL,
  `temperature` float NOT NULL,
  `present` varchar(255) NOT NULL,
  `past` varchar(255) NOT NULL,
  `family` varchar(255) NOT NULL,
  `disease` varchar(255) NOT NULL,
  `cause` varchar(255) NOT NULL,
  `mind` varchar(255) NOT NULL,
  `head` varchar(255) NOT NULL,
  `mouth` varchar(255) NOT NULL,
  `eye` varchar(255) NOT NULL,
  `face` varchar(255) NOT NULL,
  `nose` varchar(255) NOT NULL,
  `respiratory` varchar(255) NOT NULL,
  `cardiac` varchar(255) NOT NULL,
  `abdomen` varchar(255) NOT NULL,
  `menses` varchar(255) NOT NULL,
  `other` varchar(255) NOT NULL,
  `limb` varchar(255) NOT NULL,
  `back` varchar(255) NOT NULL,
  `skin` varchar(255) NOT NULL,
  `appetite` varchar(255) NOT NULL,
  `thirst` varchar(255) NOT NULL,
  `stool` varchar(255) NOT NULL,
  `urine` varchar(255) NOT NULL,
  `sleep` varchar(255) NOT NULL,
  `discharge` varchar(255) NOT NULL,
  `addiction` varchar(255) NOT NULL,
  `desire` varchar(255) NOT NULL,
  `aversion` varchar(255) NOT NULL,
  `aggravation` varchar(255) NOT NULL,
  `amelioration` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test_details`
--

INSERT INTO `test_details` (`caseno`, `doctorid`, `fileno`, `date`, `name`, `gender`, `age`, `dob`, `marital`, `complexion`, `constitution`, `address`, `mobile`, `occupation`, `height`, `weight`, `child`, `systolic`, `diastolic`, `pulse`, `temperature`, `present`, `past`, `family`, `disease`, `cause`, `mind`, `head`, `mouth`, `eye`, `face`, `nose`, `respiratory`, `cardiac`, `abdomen`, `menses`, `other`, `limb`, `back`, `skin`, `appetite`, `thirst`, `stool`, `urine`, `sleep`, `discharge`, `addiction`, `desire`, `aversion`, `aggravation`, `amelioration`, `photo`) VALUES
(1, 0, 0, '2024-07-10', 'Umang Hirani', 'male', 19, '2004-10-30', 'unmarried', 'Complexion', 'Constitution', 'Address', 0, 'asdf', 1, 1234, 0, 1234, 1234, 1234, 1234, '1234', '1234', '1234', '1234', '1234', 'Absent Mind,Jealousness,Over Sensitive,Angerness,Proudy', '123', '1234', '1234', '1234', '1234', 'v', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', './uploaded_files/Screenshot 2024-05-14 204413.png'),
(2, 0, 0, '2024-07-10', 'Jay Mangukiya', '', 0, '0000-00-00', 'Select', '', '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `test_name`
--

CREATE TABLE `test_name` (
  `id` int(11) NOT NULL,
  `lab` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `is_disabled` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checkup_remarks`
--
ALTER TABLE `checkup_remarks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `caseno` (`caseno`);

--
-- Indexes for table `lab_test`
--
ALTER TABLE `lab_test`
  ADD PRIMARY KEY (`id`),
  ADD KEY `caseno` (`caseno`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test_details`
--
ALTER TABLE `test_details`
  ADD PRIMARY KEY (`caseno`);

--
-- Indexes for table `test_name`
--
ALTER TABLE `test_name`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `checkup_remarks`
--
ALTER TABLE `checkup_remarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lab_test`
--
ALTER TABLE `lab_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `test_details`
--
ALTER TABLE `test_details`
  MODIFY `caseno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `test_name`
--
ALTER TABLE `test_name`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
