---
layout: classic-docs
title: STAF starter
short-title: STAF starter
---

{% include toc.md %}

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>staf-starter</artifactId>
</dependency>
```

```properties
# 1. Restitution properties
# -----------------------
# Maximum numbe os staf session for files restitution. A session is opened connection to the STAF system.
staf.maxSessionsRestitutionMode=10
# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files
staf.maxSessionStreamsRestitutionMode=10
# Maximum number of files to retrieve per stream.
staf.maxStreamFilesRestitutionMode=10

# 2. Archiving properties
# --------------------
# Maximum numbe os staf session for files archiving. A session is opened connection to the STAF system.
staf.maxSessionsArchivingMode=10
# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files
staf.maxSessionStreamsArchivingMode=10
# Maximum number of files to archive per stream.
staf.maxStreamFilesArchivingMode=10
# Minim file size for archiving into STAF (in octets). Under this limit, files are archive in TAR archives.
staf.minFileSize=1000
# Maximum files size for archiving into STAF (in octets). Above this limit, files are cuted in parts before archiving.
staf.maxFileSize=100000
# Maximum size of an TAR archive into STAF (in octets). Above this limite another TAR archive is initialized.
staf.maxTarSize=100000
# Minimum size of a TAR archive to be stored into STAF (in octets). Under this limit, TAR are locally stored.
staf.tarSizeThreshold=50000
# Above this limit of time (in hours), TAR archive are stored into STAF even if the tarSizeThreshold is not reached.
staf.maxTarArchivingHours=1
# STAF Class used to archive files under the 50Mo
staf.littleFileClass=CS3
# STAF Class used to archive files above the 50Mo
staf.biggerFileGenClass=CS3

# 3. Global properties
# -----------------
# Number of try before fail during STAF Connection
staf.attemptsBeforeFail=3
# absolute path the executable used to run shell sessions
staf.kshExec=/usr/bin/ksh
# Not mandatory. This parameter is used to run a system shell command before trying to connect to STAF system.
staf.initShellCommand=
```

# 2\. How to use STAF starter

## 2\.1 Initialization 

In order to use staf-starter the first step is to initialize :
 - STAF Service from the autowired STAFSessionManager
 - STAF Controller from the previuous initialized STAF Service

The STAF Service is used to initialize the STAF Archive to use.  
The STAF Controller is used to handle STAF file transfer and needs to be initialized with an absolute path the local STAF workspace directory.  

The local STAF Workspace directory is used to :
 - Store local TAR archives not big enought to be store into STAF System.
 - Temporary cut files which are too big to be store into STAF in one part.
 - Temporary uncompress TAR archives retrieved from STAF system to retrieve one or many files into archives.
 
```java
	/**
     * STAF connections manager
     */
    @Autowired
    private STAFSessionManager stafManager;
    
    public void init() {
        // Initialize STAF Service
        STAFService stafService = stafManager.getNewArchiveAccessService(stafArchive);
        try {
            stafController = new STAFController(stafManager.getConfiguration(), Paths.get(workspaceDirectory),
                    stafService);
            stafController.initializeWorkspaceDirectories();
        } catch (IOException e) {
            LOG.error("[STAFDataStorage Plugin] Error during plugin initialization", e);
        }
    }
```

## 2\.2 To archive files

```java
// 1. Sort files to archive per STAF Node
// key : STAF Node where to archive files in value.
// value : List of file paths to archive into the associated STAF Node.
Map<Path, Set<Path> filesToPrepare;
// 2. Prepare files to store
Set<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToArchive(filesToPrepare);
// 3. do store
stafController.archiveFiles(preparedFiles, false);
// 4. Get link between original file paths to archive and STAF URL of archived files
Map<Path, URL> rawArchivedFiles = stafController.getRawFilesArchived(preparedFiles);
```

## 2\.3 To restore files

Note : The restoration can be asynchronous. So to handle files well restored, the STAFController uses a IClientCollectListener object. After each restoration success or fail the IClientCollectListener is notified.

```java
// List of STAF URL of files to restore.
Set<URL> urls;
// 1. prepare files to restore
Set<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToRestore(urls);
// 2. do restore
stafController.restoreFiles(preparedFiles, restorationDirectory, listener);
```

## 2\.4 To delete files

```java
// List of STAF URL of files to restore.
Set<URL> urls;
// 1. prepare files to delete
Set<AbstractPhysicalFile> filesToDelete = stafController.prepareFilesToDelete(urls);
// 2. Delete prepared files
Set<URL> deletedSTAFFiles = stafController.deleteFiles(filesToDelete);
```

# 3\. Use a STAF standalone executable

The STAF libraby provide a standalone executable jar `staf-<version>-jar-with-dependencies.jar`.  
  
<b>Usage to archive files :</b>  
java -jar \  
  -Dmode=ARCHIVE \  
  -Darchive.name=\<STAF Archive\> \  
  -Darchive.password=\<STAF Archive password\> \  
  -Dnode=\<STAF Node where to archive\> \  
  -Ddir=\<Absolute path to directory where to find files to archive\>
  -Dworkspace=\<Absolute path to local STAF workspace\>
  staf-<version>-jar-with-dependencies.jar
  
<b>Usage to retrieve files :</b>  
java -jar \  
  -Dmode=RESTORE \  
  -Darchive.name=\<STAF Archive\> \  
  -Darchive.password=\<STAF Archive password\> \  
  -Dworkspace=\<Absolute path to local STAF workspace\> \
  -Douputdir=\<Absolute path to directory where to restore files\> \  
  staf-<version>-jar-with-dependencies.jar files...
  
<b>Note :</b> files... : is a list of STAF URL to retrieve (exeple staf://ARCHIVE/NODE/file)  

<b>Usage to delete files :</b>  
java -jar \  
  -Dmode=DELETE \  
  -Darchive.name=\<STAF Archive\> \  
  -Darchive.password=\<STAF Archive password\> \
  -Dworkspace=\<Absolute path to local STAF workspace\> \
  staf-<version>-jar-with-dependencies.jar files...
  
<b>Note :</b> files... : is a list of STAF URL to delete (exeple staf://ARCHIVE/NODE/file)  
